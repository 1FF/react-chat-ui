/* eslint-env jest */
import { waitFor } from '@testing-library/react';
import { LayoutHead } from '@/components/Layout';
import renderWithProviders from '@/utils/storeMockWrapper';

describe('LayoutHead Component', () => {
  let root;
  beforeEach(async () => {
    await waitFor(() => {
      root = renderWithProviders(<div id="chatbot-container"><LayoutHead /></div>);
    });
  });

  afterEach(() => { root = null; });

  it('renders without errors', () => {
    expect(root.container.querySelector('[data-e2e="chat-heading"]')).toBeInTheDocument();
  });
});
