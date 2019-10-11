import get from 'lodash/get';
import {compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import bindEvent from "./bindEvent";
import { getPostMessage } from '../actions';

export default function withPostMessageListener () {
  return compose(
    connect(null, { getPostMessage }),
    lifecycle({
      componentDidMount() {
        const { getPostMessage } = this.props;
        bindEvent(window, 'message', (event) => {
          const id = get(event, 'data.id');
          if (id === 'or-message') {
            getPostMessage(event);
          }
        });
      }
    })
  )
};
