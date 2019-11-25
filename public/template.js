export default function() {
  let length = codeLength;
  if (typeof length != 'number') {
    length = parseInt(length);
  }
  let text = '';
  let possible = '';
  if (includeUpperCase) {
    possible += 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  }
  if (includeUpperCase && !avoidAmbiguous) {
    possible += 'IO';
  }
  if (includeLowerCase) {
    possible += 'abcdefghijkmnopqrstuvwxyz';
  }
  if (includeLowerCase && !avoidAmbiguous) {
    possible += 'l';
  }
  if (includeNumbers) {
    possible += '23456789';
  }
  if (includeNumbers && !avoidAmbiguous) {
    possible += '10';
  }
  if (includeSymbols) {
    possible += '~!@#$%^&*()-_=+[]{};:<>,.?';
  }
  if (possible.length < 1) {
    this.log.error(
      'At least one character type must be switched on for a code to be generated.'
    );
    throw 'At least one character type must be switched on for a code to be generated.';
  }
  if (length > 2048) {
    length = 2048;
    this.log.warn('Max length of generated code is 2048 characters');
  }
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return this.exitStep('next', text);
}
