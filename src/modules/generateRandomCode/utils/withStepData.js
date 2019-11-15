import {compose} from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = ({ generateRandomCode: { stepData } }) => ({
  stepData,
});
export default function () {
  return compose(
    connect(mapStateToProps),
  )
};
