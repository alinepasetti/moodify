import { RequestStatus } from 'hooks/useFetch';

export type Track = {
  id: string;
  name: string;
  artists: string[];
  album: string;
  imgUrl: string;
  audioSrc: string;
  duration_ms: number;
};

export type RawTrack = {
  album: {
    album_group: string;
    album_type: string;
    artists: [
      {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      },
    ];
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: 'track';
  uri: string;
};

export type ActiveTrackProps = {
  activeTrack: Track;
  requestStatus: RequestStatus;
};
