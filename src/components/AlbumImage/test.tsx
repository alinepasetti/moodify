import { screen } from '@testing-library/react';
import AlbumImage from '.';
import { renderTheme } from '../../styles/render-theme';
import {
  TRACK_MOCK,
  createActiveTrackProviderWrapper,
} from '../../mocks/activeTrack';

describe('<AlbumImage />', () => {
  it('should render an image', () => {
    renderTheme(createActiveTrackProviderWrapper(<AlbumImage />));
    expect(screen.getByAltText(TRACK_MOCK.album)).toHaveAttribute(
      'src',
      TRACK_MOCK.imgUrl,
    );
  });
});
