export default (data = {}) => {
  const {
    codeLength,
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    avoidAmbiguous,
    includeSymbols,
  } = data;
  let text = '';
  let possible = '';
  if (includeUpperCase) { possible += 'ABCDEFGHJKLMNPQRSTUVWXYZ'; }
  if (includeUpperCase && !avoidAmbiguous) { possible += 'IO'; }
  if (includeLowerCase) { possible += 'abcdefghijkmnopqrstuvwxyz'; }
  if (includeLowerCase && !avoidAmbiguous) { possible += 'l'; }
  if (includeNumbers) { possible += '23456789'; }
  if (includeNumbers && !avoidAmbiguous) { possible += '10'; }
  if (includeSymbols) { possible += '~!@#$%^&*()-_=+[]{};:<>,.?'; }
  if (possible.length < 1) {
    this.log.error('At least one character type must be switched on for a code to be generated.');
  }

  const length = +codeLength > 2048 ? 2048 : +codeLength;

  for(let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
