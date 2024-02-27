/* eslint-env jest */
const { faker } = require("@faker-js/faker");
const { getExtractedData, filters } = require('../../src/utils/formatting');

describe("getExtractedData", () => {
  test("should return correct options and content", () => {
    // Arrange
    const optionContent = faker.lorem.word();
    const bubbleText = faker.lorem.word();
    // Act
    const result = getExtractedData(
      `${bubbleText}[${optionContent}|${optionContent}|${optionContent}]`
    );

    // Assert
    expect(result.content).toBe(bubbleText);
    result.options.forEach((element) => {
      expect(element.value).toBe(optionContent);
    });
  });

  test("should return correct options, content and filtered options", () => {
    // Arrange
    const optionContent = faker.lorem.word();
    const bubbleText = faker.lorem.word();
    const filterOne = filters[0];
    const filterTwo = filters[1];
    // Act
    const result = getExtractedData(
      `${bubbleText}[${optionContent}|${optionContent}|${optionContent}|${filterOne}|${filterTwo}]`
    );

    // Assert
    expect(result.content).toBe(bubbleText);
    result.options.forEach((element) => {
      expect(element.value).toBe(optionContent);
    });
    expect(result.filtered).toContain(filterOne);
    expect(result.filtered).toContain(filterTwo);
  });
});
