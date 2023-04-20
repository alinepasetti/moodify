import { screen } from '@testing-library/react';
import AudioControls from '.';
import { renderTheme } from '../../styles/render-theme';
import { createCurrentTimeProviderWrapper } from '../../mocks/currentTime';
import { createActiveTrackProviderWrapper } from '../../mocks/activeTrack';
import { createMoodProviderWrapper } from '../../mocks/mood';

const renderAudioControlsElement = () =>
  createMoodProviderWrapper(
    createActiveTrackProviderWrapper(
      createCurrentTimeProviderWrapper(<AudioControls />),
    ),
  );

describe('<AudioControls />', () => {
  it('should render the 3 buttons for audio control', () => {
    renderTheme(renderAudioControlsElement());

    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});
