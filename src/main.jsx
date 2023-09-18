import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@/store';

import '@/assets/css/index.css';
import { AppBase } from '@/components/AppBase';

// DEV Note: will be received by Razvigor
const initialConfig = {
  meta: {
    pd: {
      amount: '29.90',
      amountInUSD: 29.9,
      upfrontAmount: null,
      currency: 'USD',
      trial_in_days: 0,
      period: 'M',
      frequency: 1,
      frequencyInMonths: 1,
      billingOptionType: 'subscription',
      planId: '59c45291-1e02-43ce-820d-1576b4eb96d3',
      provider: 'primer',
      isDisplayPricePlan: true,
      displayPlanPrice: '$29.90',
    },
    cid: '23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d',
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
    },
    themeId: 'light',
  },
};

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={ store }>
        <AppBase config={ initialConfig } />
      </Provider>
    </React.StrictMode>
  );
