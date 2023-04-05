import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Text from './';

describe('<Text />', () => {
  it('should render a paragraph', () => {
    renderTheme(<Text>Test</Text>);
    const paragraph = screen.getByText('Test');
    expect(paragraph).toBeInTheDocument();
  });
});
