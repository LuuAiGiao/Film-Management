import { Pages } from '@mui/icons-material';
import { Button, Grid, Link, Paper, TextField } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react'

export default function SigninForm({openSignin, setOpenSignin}) {
    if(!openSignin) {
        return null;
    }
  return (
    <Grid className='sign-in'>
        <Paper style={{ margin: '20px auto', width: '320px', height: '75vh', padding: '20px', textAlign: 'center'}} elevation={10}>
            <h2 style={{marginBottom: '20px', color: pink[500]}}>Sign in</h2>
            <TextField style={{marginBottom: '20px'}} label='Name' placeholder='Enter your name' fullWidth required />
            <TextField style={{marginBottom: '20px'}} label='Email' placeholder='Enter your email' fullWidth required />
            <TextField style={{marginBottom: '20px'}} label='Password' placeholder='Enter your password' type='password' fullWidth required />
            <TextField style={{marginBottom: '20px'}} label='Confirm password' placeholder='Confirm your password' type='password' fullWidth required />
            <h6>Have an account?</h6>
            <Link href="#" underline="none">Log In</Link>
            <Button style={{ color: 'black', fontWeight: 'bold', backgroundColor: pink[500], marginTop: '15px' }} variant="contained" fullWidth>Sign In</Button>
            <Button onClick={() => setOpenSignin(false)} style={{ color: pink[500], fontWeight: 'bold', marginTop: '5px', backgroundColor: 'black' }} variant="contained" fullWidth>Cancel</Button>
        </Paper>
    </Grid>
  )
}
