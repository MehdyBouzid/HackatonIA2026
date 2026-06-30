import { sendMessageToOllama } from './chat.repository.js';
import { createMessage } from './chat.model.js';

export function createChatService(history = []) {
  return {
    history,

    async send(userText) {
      const userMessage = createMessage('user', userText.trim());
      this.history.push(userMessage);

      const assistantMessage = await sendMessageToOllama(userText);
      this.history.push(assistantMessage);

      return { userMessage, assistantMessage };
    },
  };
}
