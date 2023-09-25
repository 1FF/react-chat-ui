/* eslint-env jest */
import { render } from '@testing-library/react';
import { useAppSelector } from '@/hooks';
import LayoutFoot from '@/components/Layout/foot';

jest.mock('@/hooks');

describe('LayoutFoot Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAppSelector.mockReturnValue({ themeId: 'light' });
  });

  it('renders without errors', () => {
    // Act
    const { container } = render(<LayoutFoot />);

    // Assert
    expect(container).toBeInTheDocument();
  });
});
