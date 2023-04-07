import { screen } from '@testing-library/react';
import Moods from '.';
import { renderTheme } from '../../styles/render-theme';
import { createMoodProviderWrapper } from '../../mocks/mood';

const renderMoodsElement = () => createMoodProviderWrapper(<Moods />);

describe('<Moods />', () => {
  it('should render a heading', () => {
    renderTheme(renderMoodsElement());
    const heading = screen.getByRole('heading', { name: 'Select your mood:' });
    expect(heading).toBeInTheDocument();
  });
});
