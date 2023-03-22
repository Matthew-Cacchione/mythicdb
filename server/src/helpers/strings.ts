// Capitalize the string, e.g. heLlO becomes Hello.
const capitalize = (string: String) => {
  const capital = string.charAt(0).toUpperCase();
  const lower = string.slice(1).toLowerCase();

  return capital + lower;
};

export { capitalize };
