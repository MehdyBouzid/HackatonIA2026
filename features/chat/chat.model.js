export function createMessage(role, content) {
  return {
    role,
    content,
    timestamp: new Date().toISOString(),
  };
}

export function isUserMessage(message) {
  return message.role === 'user';
}

export function isAssistantMessage(message) {
  return message.role === 'assistant';
}
