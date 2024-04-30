/* eslint-env jest */
import { getThreadId, sortBySequence } from '../../src/store/slices/chat';
import { extractVideoCode, uuidV4 } from '../../src/utils';
const youtubeTestUrls = [
  'http://www.youtube.com/embed/NLqTHREEVbY',
  'https://www.youtube.com/embed/NLqAFOURVbY',
  'http://www.youtube.com/v/NLqAFFIVEbY?fs=1&hl=en_US',
  'http://www.youtube.com/watch?v=NLqASIXrVbY',
  'https://www.youtube.com/watch?v=JYATEN_TzhA&feature=featured',
  'http://youtu.be/NLqAFTWOVbY',
  'https://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index',
  'https://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0',
  'https://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s',
  'https://www.youtube.com/embed/0zM3nApSvMg?rel=0',
  'https://www.youtube.com/watch?v=0zM3nApSvMg',
  'https://youtu.be/0zM3nApSvMg',
  'https://youtube.com/shorts/0dPkkQeRwTI?feature=share',
  'https://youtube.com/shorts/0dPkkQeRwTI',
];

describe('extractVideoCode', () => {
  test('should extract and return youtube codes', () => {
    youtubeTestUrls.forEach((url) => {
      expect(extractVideoCode(url)).toBeTruthy();
    });
  });
});

describe('chat slice helpers', () => {
  test('should sort by sequence', () => {
    // Arrange
    // Act
    const sorted = [{ sequence: 2 }, { sequence: 1 }, { sequence: 101 }, { sequence: 20 }, { sequence: '' }].sort(
      sortBySequence,
    );

    // Assert
    expect(sorted).toStrictEqual([
      { sequence: 1 },
      { sequence: 2 },
      { sequence: 20 },
      { sequence: 101 },
      { sequence: '' },
    ]);
  });

  test('getThreadId should get the id from the default field when the query param is non existant in threads', () => {
    // Arrange
    const storePartial = { chat: { thread: { 'default': uuidV4() } } };

    // Act
    const threadId = getThreadId(storePartial);

    // Assert
    expect(threadId).toBe(storePartial.chat.thread.default);
  })

  test('getThreadId should get the id from the query params field when the query param is non existant in threads', () => {
    // Arrange
    const term = 'test';
    const mockLocation = {
      href:`https://example.com/?utm_chat=${term}}`,
      search: `?utm_chat=${term}`,
    };

    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
      enumerable: true,
    });
    const storePartial = { chat: { thread: { [term]: uuidV4() } } };

    // Act
    const threadId = getThreadId(storePartial);

    // Assert
    expect(threadId).toBe(storePartial.chat.thread[term]);
  })


});
