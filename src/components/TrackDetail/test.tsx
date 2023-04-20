import { screen } from '@testing-library/react';
import TrackDetail from '.';
import { renderTheme } from '../../styles/render-theme';
import { createCurrentTimeProviderWrapper } from '../../mocks/currentTime';
import {
  TRACK_MOCK,
  createActiveTrackProviderWrapper,
} from '../../mocks/activeTrack';
import { createMoodProviderWrapper } from '../../mocks/mood';

const renderTrackDetailElement = () =>
  createMoodProviderWrapper(
    createActiveTrackProviderWrapper(
      createCurrentTimeProviderWrapper(<TrackDetail />),
    ),
  );

describe('<TrackDetail />', () => {
  it('should render the track detail', () => {
    renderTheme(renderTrackDetailElement());

    expect(screen.getByText(TRACK_MOCK.album)).toBeInTheDocument();
    expect(screen.getByAltText(TRACK_MOCK.album)).toHaveAttribute(
      'src',
      TRACK_MOCK.imgUrl,
    );

    expect(
      screen.getByRole('heading', { name: TRACK_MOCK.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(TRACK_MOCK.artists[0])).toBeInTheDocument();

    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});
