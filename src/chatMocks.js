import { chat } from './config';
import { intent } from './main';

export const initialConfig = chat('23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d');

export const history = [
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

export const historyWithLink = [
  ...history,
  {
    role: 'assistant',
    content: 'Hello this is a link to a website https://test123.com',
    time: 1700119723000
  },
];

export const historyWithEmailIntent = [
  ...history,
  {
    role: 'assistant',
    content: `Please enter [${intent.type.email}]`,
    time: 1700119723000
  },
];

export const historyWithPaymentIntent = [
  ...history,
  {
    role: 'assistant',
    content: `Ready for test payment [${intent.type.payment}]`,
    time: 1700119723000
  },
];

export const streamedMessage = 'That\'s a fantastic goal! Our plan includes over 300+ delicious recipes. Do you have a favorite type of meal you\'re hoping to find Keto-friendly versions of? [Breakfast recipes|Lunch recipes|Dinner recipes|Snack recipes|All of them!]'.split(' ');

export const streamedMessageWithLink = 'Thank you for providing all the necessary details! Based on your preferences, our personalized Mediterranean meal plan could be ideal for you! Explore more at https://test.test.test/'.split(' ');

export const streamedMessageWithEmailIntent = `Provide me your email [${intent.type.email}]`.split(' ');

export const streamedMessageWithPaymentIntent = `Payment [${intent.type.payment}]`.split(' ');

export const pd = {
  amount: '29.90',
  amountInUSD: 29.9,
  frequency: 1,
  frequencyInMonths: 1,
  billingOptionType: 'subscription',
  isDisplayPricePlan: true,
  displayPlanPrice: '$29.90'
};
