import once from 'lodash/once';
import {compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import { bindEvent, unbindEvent } from '../../../utils';
import { getPostMessage, sendActivationEvent } from '../actions';

const initialize = once(bindEvent);
const destroy = once(unbindEvent);

export default function withPostMessageListener () {
  return compose(
    connect(null, { getPostMessage, sendActivationEvent }),
    lifecycle({
      componentDidMount() {
        const { getPostMessage, sendActivationEvent } = this.props;
        destroy(window, 'message', getPostMessage);
        initialize(window, 'message', getPostMessage);
        sendActivationEvent();
      },
      componentWillUnmount() {
        const { getPostMessage } = this.props;
        destroy(window, 'message', getPostMessage);
      }
    })
  )
};
