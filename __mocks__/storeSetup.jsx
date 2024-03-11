/* eslint-env jest */
import { cleanup, waitFor } from '@testing-library/react';
import { intent } from '../src/main';
import renderWithProviders from '../src/utils/storeMockWrapper';
import { initialConfig } from '../__fixtures__/chat';
import AppBase from '../src/components/AppBase';

const spies = [];
const actualWindow = window.location;

export async function localSetup() {
  let root;
  localStorage.setItem('__pd', JSON.stringify(initialConfig.meta.pd));
  jest.useFakeTimers();
  spies.push(jest.spyOn(intent.core, 'emit'));
  const intentOnSpy = jest.spyOn(intent.core, 'on');
  spies.push(intentOnSpy);
  intentOnSpy.mockReturnValue(() => true);
  await waitFor(() => {
    root = renderWithProviders(<div id="chatbot-container"><AppBase config={initialConfig} /></div>);
  });
  return root;
}

export function localTearDown() {
  localStorage.clear();
  spies.forEach(spy => { spy.mockClear(); spy.mockRestore(); });
  cleanup();
  jest.useRealTimers();
  window.location = actualWindow;
}
