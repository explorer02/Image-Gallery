export const trimContentEnd = (text, length = 90) => {
  return text.length < length ? text : text.substring(0, length - 3) + "...";
};
