import { screen } from '@testing-library/react';
import Player from '.';
import { renderTheme } from '../../styles/render-theme';
import { createMoodProviderWrapper } from '../../mocks/mood';
import { createActiveTrackProviderWrapper } from '../../mocks/activeTrack';
import { createCurrentTimeProviderWrapper } from '../../mocks/currentTime';

const renderPlayerElement = () =>
  createMoodProviderWrapper(
    createActiveTrackProviderWrapper(
      createCurrentTimeProviderWrapper(<Player />),
    ),
  );
describe('<Player />', () => {
  it('should render the progress bar and the audio controls', () => {
    renderTheme(renderPlayerElement());
    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});
