/* eslint-env jest */

import AppBase from '@/components/AppBase';
import { events } from '@/config';
import { formatDateByLocale } from '@/utils';
import renderWithProviders from '@/utils/storeMockWrapper';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mockio, { serverSocket, cleanUp, io } from 'socket.io-client';

const initialConfig = {
  meta: {
    pd: {
      subscriberBillingFrequency: 'Billed every {1} month(s)',
      oneTimer: 'Total price to be charged',
      billingFrequencyTmsg: '',
    },
    cid: '23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d',
    systemType: 'test',
    marketing: {
      utmParams: { utm_chat: 'db-sales-nopresetquestions' },
      lastUtmParams: { utm_chat: 'db-sales-nopresetquestions' },
      screen: {
        width: 2084,
        height: 1608,
      }
    },
    eid: '23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d_PageView_1694521420366',
  },
  app: {
    aiProfile: {
      name: 'Meal Mentor',
      role: 'AI-powered nutritionist',
      imgSrc: 'https://storage.1forfit.com/4oZrkOwbOQcSIGJopBG5qsf0CmBbVDKDqflzEkXq.jpg',
      displayInStream: true,
      welcome: 'Welcome to our live support. We\'re here to understand your requirements and suggest the best Keto diet suited for you.',
      // initialMessage: 'Hi, {I am Meal Mentor}. I will help you to find the right meal plan for you. [yes|no|continue]',
      initialMessage: 'Do you want to lose weight? [Yes|No]',
    },
    chatUrl: 'https://yourketo.ngrok.io',
    themeId: 'dark',
    translations: {
      emailPlaceholder: 'Please enter your email',
      tm526: 'Continue to my plan',
      tm715: 'Enter new email',
      tm716: 'Entered email already exists, choose below to proceed',
      tm530: 'Take the quiz',
      tm1224: 'Payment in progress...',
      paymentHeaderTxt1: '<span class="font-bold block text-tau">SECURITY</span> verified',
      paymentHeaderTxt2: 'secured payments',
      loaderTexts: [
        'We securely lock up your payment details.',
        'Details zoom to the payment center.',
        'Payment center requests our bank to process.',
        'Our bank contacts your card network.',
        'Card network asks your bank for approval.',
        'Your bank reviews funds or credit.',
        'Decision travels back to us.',
        'Waiting your payment to be verified and complete.'
      ],
      payButton: 'Secure payment',
      ctaTextContent: 'Create Your Menu!',
      mealButton: 'Create your meal plan',
      error: 'Oops something went wrong.',
      tm505: 'Please enter valid email address',
    }
  },
};

const history = [
  {
    role: 'assistant',
    content: 'Do you want to lose weight?\n[Yes|No]',
    time: 1700119723000
  },
  {
    role: 'user',
    content: 'no',
    time: 1700119723000
  },
  {
    role: 'assistant',
    content: 'How are you?',
    time: 1700119723000
  },
  {
    role: 'user',
    content: 'Good',
    time: 1700119723000
  },
];

describe('AppBase', () => {
  let root;
  it('Renders with the state passed properly to the elements', async () => {
    // Arrange
    await waitFor(() => {
      root = renderWithProviders(<AppBase config={ initialConfig } />);
    });

    const items = await screen.findAllByText(initialConfig.app.aiProfile.welcome);
    const name = await screen.findAllByText(initialConfig.app.aiProfile.name);
    const expectedDate = formatDateByLocale(history[0].time);

    // DEV NOTE: this is due to socket instance duplication;
    // serverSocket.emit('connect');

    // Act
    act(() => {
      serverSocket.emit(events.chatHistory, { history, errors: [] });
    });

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');

    // Assert
    expect(dateElement.textContent).toEqual(expectedDate);
    expect(historyElements.length).toEqual(history.length);

    expect(items).toHaveLength(1);
    expect(name).toHaveLength(2);

    const { meta, config, chat } = root.store.getState();
    expect(meta).toStrictEqual(initialConfig.meta);
    expect(config.aiProfile).toStrictEqual(initialConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(initialConfig.app.translations);
    expect(chat.history.length).toStrictEqual(history.length);
    expect(chat.history[0].options.length).toEqual(2);
  });
});
