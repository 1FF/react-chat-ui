// eslint-disable-next-line import/prefer-default-export
export const extractOptionSet = (val) => {
  const regex = /\[(.*?)\]/; // Matches the string inside square brackets
  const match = regex.exec(val);

  let nextVal = val;
  let nextSet = [];

  if (match && match.length > 1) {
    nextVal = val.replace(match[0], '');
    // eslint-disable-next-line prefer-destructuring
    nextSet = match[1].split('|');
  }

  // No brackets found, return original message
  return {
    content: nextVal,
    options: nextSet.map((item, index) => ({ id: `opt-${index}`, label: item, value: item })),
  };
};
