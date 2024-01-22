import { faker } from '@faker-js/faker';
import { chat, Roles } from './config';

export { paymentData } from './config';
export const initialConfig = chat('23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d');
export const streamMock = [
  { type: 'text', text: '', id: '', time: new Date().getTime() },
  { type: 'text', text: 'Hello ', sequence: 6, id: '', time: new Date().getTime() },
  { type: 'text', text: 'My favorite search engine is [Duck Duck Go](https://duckduckgo.com). [Google](https://google.com).', sequence: 2, id: '' },
  // {
  //   type: 'image',
  //   image: { url: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/wet-dogs-before-after-bath-fb6__700-png.jpg' },
  //   sequence: 38,
  //   id: ''
  // },
  { type: 'text', text: 'to ', sequence: 3, id: '' },
  { type: 'text', text: 'talk with I just love **bold text**.', sequence: 4, id: '' },
  { type: 'text', text: 'you', sequence: 5, id: '' },
  { type: 'text', text: 'you', sequence: 7, id: '' },
  { type: 'text', text: 'you', sequence: 8, id: '' },
  { type: 'text', text: 'you', sequence: 9, id: '' },
  { type: 'text', text: 'you', sequence: 10, id: '' },
  { type: 'text', text: 'you', sequence: 11, id: '' },
  { type: 'text', text: 'you', sequence: 12, id: '' },
  { type: 'text', text: 'you', sequence: 13, id: '' },
  { type: 'text', text: 'you', sequence: 14, id: '' },
  {
    type: 'buttons',
    buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }],
    sequence: 1,
    id: ''
  },
  //  {
  //   type: 'payment',
  //   payment: 'Continue by getting the best plan that suits you with customizing it for:',
  //   sequence: 1,
  //   id: ''
  // },
  // {
  //   type: 'email',
  //   email: 'Continue by entering your email so we could make the plan that you\'ve awaited:',
  //   sequence: 1,
  //   id: ''
  // },
  // {
  //   type: 'video',
  //   video: { url: 'https://www.youtube.com/embed/edAHDU8n1dQ?si=0y4khjCKGaprRrYQ' },
  //   sequence: 2,
  //   id: ''
  // },
];

export const streamMocks = {
  text: [
    { type: 'text', text: '', id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'My favorite search engine is [Duck Duck Go](https://duckduckgo.com). [Google](https://google.com).', sequence: 2, id: 'test', errors: [] },
    { type: 'text', text: '', id: 'test', time: new Date().getTime(), errors: [] },
  ],
  buttons: [
    { type: 'buttons', buttons: [], id: 'test', time: new Date().getTime(), errors: [] },
    {
      type: 'buttons',
      buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }],
      sequence: 1,
      id: 'test',
      errors: [],
    },
    {
      type: 'buttons',
      buttons: [{ sequence: 1, value: 'Okay', text: 'option 1' }, { sequence: 2, value: 'Goodbye', text: 'option 2' }, { sequence: 3, value: 'Goodbye', text: 'option 3' }],
      sequence: 2,
      id: 'test',
      errors: [],
    },
    { type: 'buttons', buttons: [], id: 'test', time: new Date().getTime(), errors: [] },
  ],
  video: [
    {
      type: 'video',
      video: { url: 'https://www.youtube.com/embed/edAHDU8n1dQ?si=0y4khjCKGaprRrYQ' },
      sequence: 2,
      id: 'test'
    },],
  email: [
    { sequence: 1, id: 'test', errors: [] },
    { type: 'email', email: 'Email', sequence: 1, id: 'test', errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { type: 'text', text: 'Hello ', sequence: 6, id: 'test', time: new Date().getTime(), errors: [] },
    { sequence: 1, id: 'test', errors: [] },
  ],
  payment: [
    { type: 'payment', payment: 'payment', sequence: 1, id: 'test', errors: [] },
    { type: 'payment', payment: 'Continue by getting the best plan that suits you with customizing it for:', sequence: 2, id: 'test', errors: [] },
    { type: 'payment', payment: 'payment', sequence: 3, id: 'test', errors: [] },
  ],
  image: [{
    type: 'image',
    image: { url: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/wet-dogs-before-after-bath-fb6__700-png.jpg' },
    sequence: 38,
    id: 'test'
  }],
};

const contentMock = [
  { type: 'text', text: 'hello', role: Roles.assistant, sequence: 1 },
  {
    type: 'buttons',
    role: Roles.assistant,
    buttons: [
      { sequence: 1, value: 'Okay', text: 'option 1' },
      { sequence: 2, value: 'Goodbye', text: 'option 2' }],
    sequence: 2,
  }];

export const serverHistoryMock = [
  { id: faker.string.uuid(), time: 1700119723000, role: Roles.assistant, content: contentMock },
  { id: faker.string.uuid(), time: 1700119723001, role: Roles.user, content: 'user test' },
  { id: faker.string.uuid(), time: 1700119723002, role: Roles.assistant, content: contentMock },
  { id: faker.string.uuid(), time: 1700119723003, role: Roles.user, content: 'user test' },
  { id: faker.string.uuid(), time: 1700119723004, role: Roles.assistant, content: contentMock },
  { id: faker.string.uuid(), time: 1700119723005, role: Roles.user, content: 'user test' },
  { id: faker.string.uuid(), time: 1700119723006, role: Roles.assistant, content: contentMock },
];

export const serverHistoryMockWithLink = [
  ...serverHistoryMock,
  { id: faker.string.uuid(), role: Roles.assistant, content: [{ type: 'text', text: 'hello [test](https://test.com).', role: Roles.assistant, sequence: 1, time: 1700119723000 }] }
];

export const serverHistoryMockWithEmailIntent = [
  ...serverHistoryMock,
  { id: faker.string.uuid(), role: Roles.assistant, content: [{ type: 'email', email: 'Give us email', role: Roles.assistant, sequence: 1, time: 1700119723000 }] }
];

export const serverHistoryMockWithPaymentIntent = [
  ...serverHistoryMock,
  { id: faker.string.uuid(), role: Roles.assistant, content: [{ type: 'payment', payment: 'Give us email', role: Roles.assistant, sequence: 1, time: 1700119723000 }] }
];