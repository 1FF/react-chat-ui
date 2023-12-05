/* eslint-env jest */
import { render } from '@testing-library/react';
import { useAppSelector } from '@/hooks';
import Profile from '@/components/Profile/index';
import profile from '@/components/Profile/variants';
import { roles } from '@/config';

jest.mock('@/hooks');
jest.mock('@/components/Profile/variants');

describe('Profile Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAppSelector.mockReturnValue({ themeId: 'light', aiProfile: roles.assistant });
    profile.mockReturnValue({ base: jest.fn(),
      avatar: jest.fn(),
      info: jest.fn(),
      role: jest.fn(),
      name: jest.fn(),
      imgWrapper: jest.fn(),
    });
  });

  it('should be called with default props when none are provided', () => {
    // Act
    const { container } = render(<Profile />);

    // Assert
    expect(profile).toBeCalledWith({ orientation: 'horizontal', minimized: false, theme: 'light' });
    expect(container).toBeInTheDocument();
  });

  it('should be called with default props when there are provided', () => {
    // Act
    const orientation = 'vertical';
    const minimized = true;
    const { container } = render(<Profile orientation={ orientation } minimized={ minimized } />);

    // Assert
    expect(profile).toBeCalledWith({ orientation, minimized, theme: 'light' });
    expect(container).toBeInTheDocument();
  });
});
