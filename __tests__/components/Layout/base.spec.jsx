/* eslint-env jest */
import { render } from '@testing-library/react';
import { useAppSelector } from '@/hooks';
import { LayoutBase } from '@/components/Layout';

const original = console.error;
jest.mock('@/hooks');

describe('LayoutBase Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.error = jest.fn();
    useAppSelector.mockReturnValue({ themeId: 'light' });
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
