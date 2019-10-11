// Send a message to the parent
export default function sendMessage (data) {
  // Make sure you are sending a string, and to stringify JSON
  window.parent.postMessage(data, '*');
};
