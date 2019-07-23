// @flow
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import styles from './ContactForm.module.scss';
import { useTAndCDialog } from '../../hooks';

interface Props {
  url: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  titleContainer: {
    marginTop: theme.spacing(5),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
  },
  mainTitle: {
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: '6px',
    borderBottomStyle: 'solid',
    lineHeight: 1.3,
  },
  Message: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: 'center'
  },
  checkboxLabel: {
    paddingTop: theme.spacing(2)
  },
  checkboxHelper: {
    paddingLeft: theme.spacing(1)
  }
}));

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(250, `Isn't that name a little to long?`)
    .required('Your name is important for us'),
  email: Yup.string()
    .email(`It seams you've made a mistake in your email`)
    .required('Without email we cannot respond to your request'),
  content: Yup.string().required('We have to know about your idea'),
  termsChecked: Yup.bool().oneOf(
    [true],
    'You have to agree with terms and conditions first'
  ),
});

const ContactForm: React.FC<Props> = ({ url }) => {
  const classes = useStyles(undefined);
  const [ isDialogOpen, setIsDialogOpen ] = useTAndCDialog();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <section className={classes.root} id="contact">
      <Typography variant="h3" component="h1" align={'center'} className={classes.titleContainer}>
        <span className={classes.mainTitle}>Contact Us</span>
      </Typography>
      <Container>
        <Formik
          onSubmit={(values, actions) => {
            const formData = `${url}&entry.1882384716=${
              values.name
            }&entry.367399747=${values.email}&entry.1157697554=${encodeURI(
              values.content
            )}&submit=Submit`;
            fetch(formData, {
              method: 'GET', // *GET, POST, PUT, DELETE, etc.
              mode: 'no-cors', // no-cors, cors, *same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'omit', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            })
              .then(data => {
                actions.setSubmitting(false);
                if (data.ok) {
                  actions.setStatus({
                    msg: `Your message was sent. I'll try to get back to you ASAP, have a nice day :)`,
                    code: 200,
                  });
                } else {
                  actions.setStatus({
                    msg: `There was a problem with connecting with Google services. Because of that your message couldn't be processed. It would be great if You could send the same message to contact@quarkowl.com . Sorry for inconvenience :(`,
                    code: 400,
                  });
                }
              })
              .catch(() => {
                actions.setSubmitting(false);
                actions.setStatus({
                  msg: `There was a problem with connecting with Google services. Because of that your message couldn't be processed. It would be great if You could send the same message to contact@quarkowl.com . Sorry for inconvenience :(`,
                  code: 400,
                });
              });
          }}
          validationSchema={ContactSchema}
          initialValues={{
            name: '',
            email: '',
            content: '',
            termsChecked: false,
          }}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => {
            return status != null ? (
              <Container className={classes.Message}>
                <Typography
                  variant="h3"
                  align="center"
                  gutterBottom={true}
                  className={[
                    status.code === 400
                      ? styles['Message-title_error']
                      : styles['Message-title_success'],
                    styles['Message-title'],
                  ].join(' ')}
                >
                  {status.code === 400
                    ? 'Houston, we have a problem'
                    : 'Success'}
                </Typography>
                <Typography variant="h6">{status.msg}</Typography>
              </Container>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={classes.container}
                autoComplete="off"
              >
                <TextField
                  margin="normal"
                  fullWidth={true}
                  required={true}
                  id="name"
                  label="Name"
                  value={values.name}
                  className={classes.textField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={touched.name && errors.name}
                  FormHelperTextProps={{ className: styles.helperClassName }}
                />
                <TextField
                  margin="normal"
                  fullWidth={true}
                  required={true}
                  id="email"
                  label="Email"
                  value={values.email}
                  className={classes.textField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  helperText={touched.email && errors.email}
                  FormHelperTextProps={{ className: styles.helperClassName }}
                />
                <TextField
                  margin="normal"
                  fullWidth={true}
                  required={true}
                  multiline={true}
                  id="content"
                  label="Describe your idea..."
                  value={values.content}
                  className={classes.textField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.content && touched.content}
                  helperText={touched.content && errors.content}
                  FormHelperTextProps={{ className: styles.helperClassName }}
                />

                <FormControl
                  required={true}
                  error={errors.termsChecked != null}
                >
                  <label htmlFor="termsChecked" className={classes.checkboxLabel}>
                    <Checkbox
                      id="content"
                      required={true}
                      checked={values.termsChecked}
                      onChange={handleChange}
                      inputProps={{
                        name: 'termsChecked',
                        id: 'terms-checked',
                      }}
                    />I agree to the <Link onClick={handleOpenDialog}>terms & conditions</Link></label>
                  {errors.termsChecked && (
                    <FormHelperText className={[styles.helperClassName, classes.checkboxHelper].join(' ')}>
                      {errors.termsChecked}
                    </FormHelperText>
                  )}
                </FormControl>
                <Button
                  fullWidth={true}
                  type="submit"
                  color="primary"
                  className={classes.button}
                  disabled={
                    Object.keys(touched).length === 0 ||
                    isSubmitting ||
                    Object.keys(errors).length > 0
                  }
                >
                  Submit
                </Button>
              </form>
            );
          }}
        />
      </Container>
    </section>
  );
};

export default ContactForm;
