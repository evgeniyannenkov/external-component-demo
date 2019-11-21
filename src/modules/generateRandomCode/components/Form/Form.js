import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { sendFormData } from '../../actions';
import { Field, reduxForm, Form } from 'redux-form';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withInitialValues } from '../../utils';
import useStyles from './styles';
import { FORM_NAME, getFields, validate } from './config';

function GenerateRandomCodeForm(props) {
  const { handleSubmit, sendFormData } = props;
  const classes = useStyles();
  const fields = getFields(props);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CodeIcon />
        </Avatar>
        <Typography component="h3" variant="h5">
          Generate Random Code
        </Typography>
        <Form onSubmit={handleSubmit(sendFormData)} className={classes.form}>
          {fields.map(field => (
            <Field key={field.id} {...field} />
          ))}
        </Form>
      </div>
    </Container>
  );
}
export default compose(
  connect(null, { sendFormData }),
  withInitialValues(),
  reduxForm({
    form: FORM_NAME,
    enableReinitialize: true,
    validate,
  })
)(GenerateRandomCodeForm);
