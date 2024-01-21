/* eslint-env jest */
import { waitFor } from '@testing-library/react';

import { LayoutBase } from '../../../src/components/Layout';
import renderWithProviders from '../../../src/utils/storeMockWrapper';

const original = console.error;

describe('LayoutBase Component', () => {
  let root;
  beforeEach(async () => {
    console.error = jest.fn();
    await waitFor(() => {
      root = renderWithProviders(<div id="chatbot-container"><LayoutBase /></div>);
    });
  });

  afterEach(() => {
    root = null;
    console.error = original;
    jest.clearAllMocks();
  });

  it('renders without errors', () => {
    expect(root.container.querySelector('[data-e2e="base-container"]')).toBeInTheDocument();
  });
});
