import { screen } from '@testing-library/react';
import ProgressBar from '.';
import { renderTheme } from '../../styles/render-theme';
import { createCurrentTimeProviderWrapper } from '../../mocks/currentTime';
import { createActiveTrackProviderWrapper } from '../../mocks/activeTrack';
import { createMoodProviderWrapper } from '../../mocks/mood';

const renderProgressBarElement = () =>
  createMoodProviderWrapper(
    createActiveTrackProviderWrapper(
      createCurrentTimeProviderWrapper(<ProgressBar />),
    ),
  );

describe('<ProgressBar />', () => {
  it('should render a progress bar', () => {
    renderTheme(renderProgressBarElement());
    expect(screen.queryByRole('slider')).toBeInTheDocument();
  });
});
