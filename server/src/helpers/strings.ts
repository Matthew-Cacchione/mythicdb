// Capitalize the string, e.g. heLlO becomes Hello.
const capitalize = (str: String) => {
  const capital = str.charAt(0).toUpperCase();
  const lower = str.slice(1).toLowerCase();

  return capital + lower;
};

export { capitalize };
