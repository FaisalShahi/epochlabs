import React, { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { m } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MotionViewport, varFade } from 'src/components/animate';
import { useSnackbar } from 'src/components/snackbar';

export default function ContactForm() {

  const form = useRef();

  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.target, 'form');

    emailjs.sendForm(
      'service_gxryz59',
      'template_7zosvcr',
      form.current,
      'qjgxXqsdCHp309QAe')
      .then((result) => {
        console.log(result.text);
        console.log('result.text');
        enqueueSnackbar('Request submitted!', { variant: 'default' });
        e.target.reset()
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <Stack component={MotionViewport} spacing={5}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">
          Feel free to contact us. <br />
          We&apos;ll be glad to hear from you.
        </Typography>
      </m.div>

      <form onSubmit={sendEmail} ref={form}>
        <Stack spacing={3}>
          <div>
            <TextField fullWidth label="Name" name="user_name" />
          </div>

          <div>
            <TextField fullWidth label="Email" type="email" name="email" required inputProps={{
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
              title: "Enter a valid email address",
            }} />
          </div>

          <div>
            <TextField fullWidth label="Subject" name="subject" />
          </div>

          <div>
            <TextField fullWidth label="Enter your message here." multiline rows={4} name="message" required />
          </div>

          <div>
            <Button type="submit" size="large" variant="contained">
              Submit Now
            </Button>
          </div>
        </Stack>
      </form>
    </Stack>
  );
}
