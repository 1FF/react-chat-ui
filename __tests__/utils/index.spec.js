import { extractVideoCode } from '../../src/utils';
const youtubeTestUrls = [
  "http://www.youtube.com/embed/NLqTHREEVbY",
  "https://www.youtube.com/embed/NLqAFOURVbY",
  "http://www.youtube.com/v/NLqAFFIVEbY?fs=1&hl=en_US",
  "http://www.youtube.com/watch?v=NLqASIXrVbY",
  "https://www.youtube.com/watch?v=JYATEN_TzhA&feature=featured",
  "http://youtu.be/NLqAFTWOVbY",
  "https://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "https://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
  "https://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "https://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "https://www.youtube.com/watch?v=0zM3nApSvMg",
  "https://youtu.be/0zM3nApSvMg",
  "https://youtube.com/shorts/0dPkkQeRwTI?feature=share",
  "https://youtube.com/shorts/0dPkkQeRwTI",
];

describe('extractVideoCode', () => {
  test('should extract and return youtube codes', () => {
    youtubeTestUrls.forEach(url => {
      expect(extractVideoCode(url)).toBeTruthy();
    })
  });
})