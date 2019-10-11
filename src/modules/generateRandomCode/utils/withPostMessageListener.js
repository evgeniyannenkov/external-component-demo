import get from 'lodash/get';
import {compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import bindEvent from "./bindEvent";
import { getPostMessage } from '../actions';
import { OR_MESSAGE_TYPE } from "../../../constants";

export default function withPostMessageListener () {
  return compose(
    connect(null, { getPostMessage }),
    lifecycle({
      componentDidMount() {
        const { getPostMessage } = this.props;
        bindEvent(window, 'message', (event) => {
          const type = get(event, 'data.type');
          if (type === OR_MESSAGE_TYPE) {
            getPostMessage(event);
          }
        });
      }
    })
  )
};
