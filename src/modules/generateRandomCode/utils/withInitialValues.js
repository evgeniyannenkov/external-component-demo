import get from 'lodash/get';
import {compose, withProps} from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = ({ generateRandomCode: { stepData } }) => ({
  stepData,
});
export default function () {
  return compose(
    connect(mapStateToProps),
    withProps(({ stepData }) => ({
        initialValues: {
          avoidAmbiguous: get(stepData, 'params.avoidAmbiguous', false),
          codeLength: get(stepData, 'params.codeLength', "``"),
          includeLowerCase: get(stepData, 'params.includeLower', false),
          includeNumbers: get(stepData, 'params.includeNumbers', false),
          includeSymbols: get(stepData, 'params.includeSymbols', false),
          includeUpperCase: get(stepData, 'params.includeUpperCase', false),
        }
      })
    ),
  )
};
