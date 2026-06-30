export async function postJson(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let data;

  try {
    data = text ? JSON.parse(text) : {};
  } catch (error) {
    throw new Error(`Réponse invalide du serveur : ${error.message}`);
  }

  if (!response.ok) {
    const message = data?.error || data?.message || response.statusText;
    throw new Error(`Requête échouée (${response.status}): ${message}`);
  }

  return data;
}
