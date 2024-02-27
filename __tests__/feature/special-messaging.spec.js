/* eslint-env jest */
import { act } from 'react-dom/test-utils';
import { faker } from '@faker-js/faker';

import { dispatchStreaming, localSetup, localTearDown } from '../helpers';
import { SPECIAL_MERCHANT, SPECIAL_SUPPORT_TICKET, SUPPORT_PURPOSE } from '../../src/config/env';

jest.useFakeTimers();

let root;
describe('Special messages are hidden and elements depending on them are visualized accordingly', () => {
  afterEach(localTearDown);

  test(`should arrange items accordingly when special message is ${SPECIAL_MERCHANT}`, async () => {
    // Arrange
    root = await localSetup({ purpose: 'support' })

    // Act
    act(() => dispatchStreaming([`${faker.lorem.sentence()} [${SPECIAL_MERCHANT}]`]));
    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });

  test(`should arrange items accordingly when special message is ${SPECIAL_SUPPORT_TICKET}`, async () => {
    // Arrange
    root = await localSetup({ purpose: 'support' })

    // Act
    act(() => dispatchStreaming([`${faker.lorem.sentence()} [${SPECIAL_SUPPORT_TICKET}]`]));
    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });

  test(`should not show cta component when there is configured purpose ${SUPPORT_PURPOSE}`, async () => {
    root = await localSetup({ purpose: 'support' })

    // Act
    act(() => dispatchStreaming([`${faker.lorem.sentence()} ${faker.internet.url()}`]))
    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).not.toBeInTheDocument();
    expect(userFormElement).toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });

  test('should not show cta component when there is no configured purpose', async () => {
    root = await localSetup()

    // Act
    act(() => dispatchStreaming([`${faker.lorem.sentence()} ${faker.internet.url()}`]))
    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });
});
