import { API_URL, MODEL_NAME } from '../../config.js';
import { postJson } from '../../shared/httpClient.js';
import { createMessage } from './chat.model.js';

export async function sendMessageToOllama(userText) {
  const payload = {
    model: MODEL_NAME,
    messages: [{ role: 'user', content: userText }],
  };

  const data = await postJson(API_URL, payload);
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error('Réponse inattendue de l’API Ollama.');
  }

  return createMessage('assistant', content.trim());
}
