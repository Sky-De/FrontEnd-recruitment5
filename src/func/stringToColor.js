
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let bgColor = '#';
  let textColor = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    bgColor += `00${value.toString(16)}`.slice(-2);
    textColor += `00${value.toString(16)}`.slice(-1);
  }
  /* eslint-enable no-bitwise */

  return {bgColor,textColor};
}

export default stringToColor;