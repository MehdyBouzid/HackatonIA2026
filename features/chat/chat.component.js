import { createChatService } from './chat.service.js';
import { query, createElement } from '../../shared/dom.js';

const chatService = createChatService([]);
let isLoading = false;

function renderMessage(message) {
  const messageElement = createElement('article', {
    className: `chat-message ${message.role}`,
    children: [createElement('div', { text: message.content })],
  });

  const meta = createElement('div', {
    className: 'chat-meta',
    text: message.role === 'user' ? 'Vous' : 'Phi-3.5-Financial',
  });

  messageElement.appendChild(meta);
  return messageElement;
}

function setStatus(text, isError = false) {
  const status = query('#chatStatus');
  if (!status) return;
  if (!text) {
    status.hidden = true;
    status.textContent = '';
    status.classList.remove('error');
    return;
  }

  status.hidden = false;
  status.textContent = text;
  status.classList.toggle('error', isError);
}

function setLoading(state) {
  isLoading = state;
  const button = query('#chatForm button');
  const textarea = query('#chatInput');

  if (button) {
    button.disabled = state;
    button.textContent = state ? 'Envoi...' : 'Envoyer';
  }

  if (textarea) {
    textarea.disabled = state;
  }
}

function renderHistory() {
  const windowElement = query('#chatWindow');
  if (!windowElement) return;
  windowElement.innerHTML = '';
  chatService.history.forEach((message) => windowElement.appendChild(renderMessage(message)));
  windowElement.scrollTop = windowElement.scrollHeight;
}

async function submitMessage(event) {
  event.preventDefault();
  if (isLoading) return;

  const input = query('#chatInput');
  if (!input) return;

  const message = input.value.trim();

  if (!message) {
    setStatus('Veuillez écrire un message avant d’envoyer.', true);
    return;
  }

  const MAX_MESSAGE_LENGTH = 500;

  if (message.length > MAX_MESSAGE_LENGTH) {
    setStatus(`Message trop long. Maximum ${MAX_MESSAGE_LENGTH} caractères.`, true);
    return;
  }

  setStatus('Envoi en cours...', false);
  setLoading(true);
  setStatus('');

  try {
    const { userMessage, assistantMessage } = await chatService.send(message);
    input.value = '';
    renderHistory();
    setStatus('Réponse reçue.', false);
    setTimeout(() => setStatus(''), 2200);
  } catch (error) {
    setStatus(error.message || 'Erreur lors de l’appel à l’API.', true);
  } finally {
    setLoading(false);
  }
}

export function initChat() {
  const form = query('#chatForm');
  const input = query('#chatInput');

  if (!form || !input) {
    console.error('Éléments du chat introuvables.');
    return;
  }

  renderHistory();
  form.addEventListener('submit', submitMessage);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });
}
