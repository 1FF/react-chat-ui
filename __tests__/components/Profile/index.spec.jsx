/* eslint-env jest */
import { render } from '@testing-library/react';

import { useAppSelector } from '../../../src/hooks';
import Profile from '../../../src/components/Profile/index';
import profile from '../../../src/components/Profile/variants';
import { roles } from '../../../src/config';

jest.mock('../../../src/hooks');
jest.mock('../../../src/components/Profile/variants');

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
