import React, { useRef } from 'react';
import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
//
import { varFade, MotionViewport } from 'src/components/animate';
import { useSnackbar } from 'src/components/snackbar';
import emailjs from '@emailjs/browser';

// ----------------------------------------------------------------------

export default function FaqsForm() {

  const form = useRef();

  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gxryz59',
      'template_7zosvcr',
      form.current,
      'qjgxXqsdCHp309QAe')
      .then((result) => {
        console.log(result.text);
        console.log('result.text');
        enqueueSnackbar('Query submitted!', { variant: 'default' });
        e.target.reset()
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <Stack component={MotionViewport} spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h4">{`Haven't found the right help?`}</Typography>
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
            <TextField fullWidth label="Enter your message here." multiline rows={4} name="message" required/>
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
