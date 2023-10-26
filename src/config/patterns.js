// This pattern will exclude {https://test.test.test} or any of those symbols {}[]()<> at the end of the link
export const link = /((?:https?:\/\/|www\.)[^\s/$.?#].[^\s{}[\]()<>]*)/gi;

// { replaceStringInCurlyBracketsWithStrong('this is a strong {tagged} text {g') } => <strong>...</strong>
export const curlyBraces = /\{([^}]+)\}/g;
