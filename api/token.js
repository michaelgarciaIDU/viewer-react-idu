import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    console.log("Ejecutando /api/token");

    const client_id = process.env.FORGE_CLIENT_ID;
    const client_secret = process.env.FORGE_CLIENT_SECRET;

    if (!client_id || !client_secret) {
      console.error("❌ Variables de entorno faltantes");
      return res.status(500).json({ error: 'Faltan FORGE_CLIENT_ID o FORGE_CLIENT_SECRET' });
    }

    const params = new URLSearchParams({
      client_id,
      client_secret,
      grant_type: 'client_credentials',
      scope: 'data:read data:write bucket:create bucket:read'
    });

    const response = await fetch('https://developer.api.autodesk.com/authentication/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("❌ Error de APS:", text);
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    console.log("✅ Token generado");
    res.status(200).json(data);

  } catch (err) {
    console.error("❌ Error inesperado:", err);
    res.status(500).json({ error: err.message });
  }
}
