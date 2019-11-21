import isNaN from 'lodash/isNaN';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const renderTextField = props => {
  const {
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  } = props;
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
      label={label}
    />
  </div>
);

export const FORM_NAME = 'GenerateRandomCodeForm';

export const getFields = ({ submit }) => [
  {
    variant: 'outlined',
    margin: 'normal',
    fullWidth: true,
    id: 'codeLength',
    type: 'number',
    label: 'Length',
    name: 'codeLength',
    placeholder: 'Enter the number of characters',
    autoFocus: true,
    onBlur: submit,
    component: renderTextField,
  },
  {
    id: 'avoidAmbiguous',
    label: 'Avoid ambiguous characters (l/I/1, 0/O)',
    name: 'avoidAmbiguous',
    onChange: submit,
    component: renderCheckbox,
  },
  {
    id: 'includeUpperCase',
    label: 'Include uppercase letters',
    name: 'includeUpperCase',
    onChange: submit,
    component: renderCheckbox,
  },
  {
    id: 'includeLowerCase',
    label: 'Include lowercase letters',
    name: 'includeLowerCase',
    onChange: submit,
    component: renderCheckbox,
  },
  {
    id: 'includeNumbers',
    label: 'Include numbers',
    name: 'includeNumbers',
    onChange: submit,
    component: renderCheckbox,
  },
  {
    id: 'includeSymbols',
    label: 'Include symbols',
    name: 'includeSymbols',
    onChange: submit,
    component: renderCheckbox,
  },
];

export const validate = values => {
  const errors = {};
  const { codeLength } = values;
  if (!codeLength) {
    errors.codeLength = 'This field is required';
  }
  if (isNaN(+codeLength)) {
    errors.codeLength = 'Must be a number';
  }
  if (+codeLength < 1) {
    errors.codeLength = 'The number range must be from 1 to 256';
  }
  return errors;
};
