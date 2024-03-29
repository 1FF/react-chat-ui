/* eslint-env jest */
import { waitFor } from '@testing-library/react';

import { LayoutFoot } from '../../../src/components/Layout';
import renderWithProviders from '../../../src/utils/storeMockWrapper';

describe('LayoutFoot Component', () => {
  let root;
  beforeEach(async () => {
    await waitFor(() => {
      root = renderWithProviders(<div id="chatbot-container"><LayoutFoot /></div>);
    });
  });

  afterEach(() => { root = null; });

  it('renders without errors', () => {
    expect(root.container.querySelector('[data-e2e="chat-foot"]')).toBeInTheDocument();
  });
});
