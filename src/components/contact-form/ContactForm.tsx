// @flow
import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Checkbox, Container, Link, Box, Textarea, Button, Label } from 'theme-ui';

import './ContactForm.css';
import { useTAndCDialog } from '../../hooks';
import config from '../../../config';

interface Props {
  url: string;
}

const contactFormUrl = config.contactFormUrl;

const ContactSchema = Yup.object().shape({
  name: Yup.string().max(250, `Isn't that name a little to long?`).required('Your name is important for us'),
  email: Yup.string().email(`It seams you've made a mistake in your email`).required('Without email we cannot respond to your request'),
  content: Yup.string().required('We have to know about your idea'),
  termsChecked: Yup.bool().oneOf([true], 'You have to agree with terms and conditions first'),
});

const ContactForm: React.FC<Props> = ({ url= contactFormUrl }) => {
  const [isDialogOpen, setIsDialogOpen] = useTAndCDialog();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <section id="contact">
      <Container className={'contact-form'}>
        <Formik
          onSubmit={(values, actions) => {
            const formData = `${url}&entry.1882384716=${values.name}&entry.367399747=${values.email}&entry.1157697554=${encodeURI(
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
              .then((data) => {
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
        >
          {({ values, errors, status, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => {
            return status != null ? (
              <Container className={'contact-message '}>
                <h3 className={[status.code === 400 ? 'Message-title_error' : 'Message-title_success', 'Message-title'].join(' ')}>
                  {status.code === 400 ? 'Houston, we have a problem' : 'Success'}
                </h3>
                <h6>{status.msg}</h6>
              </Container>
            ) : (
              <form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  m={4}
                  margin="normal"
                  required={true}
                  id="name"
                  placeholder={'Name'}
                  style={{ borderWidth: 2 }}
                  color={errors.name && touched.name ? 'red' : 'default'}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  margin="normal"
                  m={4}
                  required={true}
                  id="email"
                  placeholder={'Email'}
                  style={{ borderWidth: 2 }}
                  color={errors.email && touched.email ? 'red' : 'default'}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Textarea
                  margin="normal"
                  m={4}
                  rows={6}
                  required={true}
                  style={{ borderWidth: 2 }}
                  color={errors.content && touched.content ? 'red' : 'default'}
                  id="content"
                  placeholder="Describe what we can help you with..."
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Box mb={2} mt={2}>
                  <Label htmlFor="termsChecked">
                    <Field type="checkbox" name="termsChecked" sx={{ width: 20 }} />
                    &nbsp; I agree to the &nbsp;
                    <Link color="secondary" onClick={handleOpenDialog}>
                      {' '}
                      terms & conditions
                    </Link>
                  </Label>
                  <div className={['checkboxHelper'].join(' ')}>{errors.termsChecked && errors.termsChecked}</div>
                </Box>
                <Button
                  type="submit"
                  backgroundColor={Object.keys(touched).length === 0 || isSubmitting || Object.keys(errors).length > 0 ? 'grey' : 'primary'}
                  color="text"
                  disabled={Object.keys(touched).length === 0 || isSubmitting || Object.keys(errors).length > 0}
                >
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
      </Container>
    </section>
  );
};

export default ContactForm;
