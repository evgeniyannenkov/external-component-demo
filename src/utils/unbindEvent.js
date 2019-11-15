export default function unbindEvent(element, eventName, eventHandler) {
  if (element.removeEventListener) {
    element.removeEventListener(eventName, eventHandler);
  } else if (element.detachEvent) {
    element.detachEvent('on' + eventName, eventHandler);
  }
}
