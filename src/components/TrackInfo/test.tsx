import { screen } from '@testing-library/react';
import TrackInfo from '.';
import { renderTheme } from '../../styles/render-theme';
import { createCurrentTimeProviderWrapper } from '../../mocks/currentTime';
import {
  TRACK_MOCK,
  createActiveTrackProviderWrapper,
} from '../../mocks/activeTrack';
import { createMoodProviderWrapper } from '../../mocks/mood';

const renderTrackInfoElement = () =>
  createMoodProviderWrapper(
    createActiveTrackProviderWrapper(
      createCurrentTimeProviderWrapper(<TrackInfo />),
    ),
  );

describe('<TrackInfo />', () => {
  it('should render the track information', () => {
    renderTheme(renderTrackInfoElement());
    expect(
      screen.getByRole('heading', { name: TRACK_MOCK.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(TRACK_MOCK.artists[0])).toBeInTheDocument();
  });
});
