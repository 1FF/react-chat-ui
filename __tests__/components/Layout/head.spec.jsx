/* eslint-env jest */
import { render } from '@testing-library/react';
import { useAppSelector } from '@/hooks';
import { faker } from '@faker-js/faker';
import { LayoutHead } from '@/components/Layout';

jest.mock('@/hooks');

describe('LayoutHead Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAppSelector.mockReturnValue({
      themeId: 'light',
      aiProfile: {
        imgSrc: faker.image.url(), name: faker.person.fullName(), role: faker.person.jobTitle()
      } });
  });

  it('renders without errors', () => {
    // Act
    const { container } = render(<LayoutHead />);

    // Assert
    expect(container).toBeInTheDocument();
  });
});
