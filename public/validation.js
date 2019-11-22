export default function(data = {}) {
  const {
    params: { codeLength },
  } = data;
  console.log('isValid', !(!codeLength || !+codeLength || +codeLength < 1));
  return !(!codeLength || !+codeLength || +codeLength < 1);
}
