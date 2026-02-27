import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Checkbox, Container, Link, Box, Textarea, Button, Label } from 'theme-ui';

import './ContactForm.css';
import { useDialog } from '../../hooks';
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

const inputSx = {
  mb: 3,
  background: 'cardBg',
  border: '1px solid',
  borderColor: 'cardBorder',
  borderRadius: '12px',
  color: 'heading',
  fontFamily: 'body',
  fontSize: [1, 2],
  px: 3,
  py: 3,
  transition: 'all 0.25s ease',
  '&::placeholder': {
    color: 'textMuted',
    opacity: 0.6,
  },
  '&:focus': {
    outline: 'none',
    borderColor: 'primary',
    background: 'rgba(139, 92, 246, 0.06)',
    boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.12)',
  },
};

const ContactForm: React.FC<Props> = ({ url = contactFormUrl }) => {
  const [, setDialogType] = useDialog();

  const handleOpenDialog = () => {
    setDialogType('terms');
  };

  return (
    <section id="contact">
      <Container className={'contact-form'} sx={{ px: 0 }}>
        <Formik
          onSubmit={(values, actions) => {
            const formData = `${url}&entry.1882384716=${values.name}&entry.367399747=${values.email}&entry.1157697554=${encodeURI(
              values.content
            )}&submit=Submit`;
            fetch(formData, {
              method: 'GET',
              mode: 'no-cors',
              cache: 'no-cache',
              credentials: 'omit',
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
              <Container className={'contact-message'}>
                <h3 className={[status.code === 400 ? 'Message-title_error' : 'Message-title_success', 'Message-title'].join(' ')}>
                  {status.code === 400 ? 'Houston, we have a problem' : 'Message sent!'}
                </h3>
                <p style={{ color: 'rgba(148,163,184,0.9)', lineHeight: 1.65 }}>{status.msg}</p>
              </Container>
            ) : (
              <form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  sx={{
                    ...inputSx,
                    ...(errors.name && touched.name ? { border: '1px solid rgba(248, 113, 113, 0.6)' } : {}),
                  }}
                  required={true}
                  id="name"
                  placeholder={'Your name'}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  sx={{
                    ...inputSx,
                    ...(errors.email && touched.email ? { border: '1px solid rgba(248, 113, 113, 0.6)' } : {}),
                  }}
                  required={true}
                  id="email"
                  placeholder={'Your email'}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Textarea
                  sx={{
                    ...inputSx,
                    resize: 'vertical',
                    minHeight: '140px',
                    ...(errors.content && touched.content ? { border: '1px solid rgba(248, 113, 113, 0.6)' } : {}),
                  }}
                  rows={6}
                  required={true}
                  id="content"
                  placeholder="Describe what we can help you with..."
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Box mb={3} mt={1}>
                  <Label
                    htmlFor="termsChecked"
                    sx={{
                      color: 'rgba(148, 163, 184, 0.8)',
                      fontSize: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      cursor: 'pointer',
                    }}
                  >
                    <Field type="checkbox" name="termsChecked" sx={{ width: 18, height: 18, cursor: 'pointer' }} />
                    I agree to the&nbsp;
                    <Link
                      sx={{ color: 'primary', cursor: 'pointer', fontWeight: 500 }}
                      onClick={handleOpenDialog}
                    >
                      terms &amp; conditions
                    </Link>
                  </Label>
                  <div className={'checkboxHelper'}>{errors.termsChecked && errors.termsChecked}</div>
                </Box>
                <Button
                  type="submit"
                  disabled={Object.keys(touched).length === 0 || isSubmitting || Object.keys(errors).length > 0}
                  sx={{
                    background:
                      Object.keys(touched).length === 0 || isSubmitting || Object.keys(errors).length > 0
                        ? 'cardBg'
                        : 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    px: 5,
                    py: 3,
                    fontSize: [1, 2],
                    fontWeight: 600,
                    fontFamily: 'body',
                    letterSpacing: '0.04em',
                    cursor:
                      Object.keys(touched).length === 0 || isSubmitting || Object.keys(errors).length > 0
                        ? 'not-allowed'
                        : 'pointer',
                    transition: 'all 0.25s ease',
                    '&:hover:not(:disabled)': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(139, 92, 246, 0.35)',
                    },
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
