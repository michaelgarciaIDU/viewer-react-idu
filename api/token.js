import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const client_id = process.env.FORGE_CLIENT_ID;
    const client_secret = process.env.FORGE_CLIENT_SECRET;

    if (!client_id || !client_secret) {
      return res.status(500).json({ error: 'Faltan variables de entorno' });
    }

    const response = await fetch('https://developer.api.autodesk.com/authentication/v1/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id,
        client_secret,
        grant_type: 'client_credentials',
        scope: 'data:read data:write bucket:create bucket:read'
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar token' });
  }
}
