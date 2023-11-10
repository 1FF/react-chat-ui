/* eslint-env jest */
import { render } from '@testing-library/react';
import { useAppSelector, useWindowSize } from '@/hooks';
import { LayoutBase } from '@/components/Layout';

const original = console.error;
jest.mock('@/hooks');

describe('LayoutBase Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.error = jest.fn();
    useAppSelector.mockReturnValue({ themeId: 'light' });
    useWindowSize.mockReturnValue([150, 150]);
  });

  afterEach(() => {
    console.error = original;
  });

  it('renders without errors', () => {
    // Act
    const { container } = render(<LayoutBase
      head={ <div>Head</div> } stream={ <div>Stream</div> }
      foot={ <div>Foot</div> }
    />);

    // Assert
    expect(container).toBeInTheDocument();
  });

  it('renders with console error when prop is missing', () => {
    // Act
    render(<LayoutBase stream={ <div>Stream</div> } foot={ <div>Foot</div> } />);

    // Assert
    expect(console.error).toHaveBeenCalled();
  });
});
