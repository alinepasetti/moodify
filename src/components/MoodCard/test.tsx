import { screen } from '@testing-library/react';
import MoodCard from '.';
import { renderTheme } from '../../styles/render-theme';
import { Mood } from '../../contexts/MoodProvider/types';
import { createMoodProviderWrapper } from '../../mocks/mood';

const renderMoodCardElement = () =>
  createMoodProviderWrapper(
    <MoodCard
      mood={{
        type: Mood.ABDUCT_ME,
        title: 'abduct me',
        icon: 'png',
        trackId: '123',
      }}
    />,
  );

describe('<MoodCard />', () => {
  it('should render the card elements', () => {
    renderTheme(renderMoodCardElement());
    expect(screen.getByAltText('abduct me')).toHaveAttribute(
      'src',
      './assets/mood-icons/png',
    );
  });
});
