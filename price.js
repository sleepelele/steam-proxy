export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { appid } = req.query;
  if (!appid) return res.status(400).json({ error: 'missing appid' });
  const r = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${appid}&cc=lv&filters=price_overview`
  );
  const data = await r.json();
  res.status(200).json(data);
}
