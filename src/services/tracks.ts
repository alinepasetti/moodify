import { RawTrack, Track } from 'contexts/ActiveTrackProvider/types';

export const parseSpotifyResponse = (response: RawTrack): Track => {
  return {
    id: response.id,
    name: response.name,
    artist: response.artists.map((artist) => artist.name),
    album: response.album.name,
    imgUrl: response.album.images[0].url,
    audioSrc: response.preview_url,
    duration_ms: response.duration_ms,
  };
};
