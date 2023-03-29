import { getTrack } from '../../../../lib/spotify';

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;
  const response = await getTrack(id);
  const track = await response.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200',
  );

  return res.status(200).json(track);
}
