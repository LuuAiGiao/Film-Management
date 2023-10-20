import { CheckBox } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react'

export default function LoginForm({ openLogin, setOpenLogin }) {
    if (!openLogin) {
        return null; // Don't render the login form if openLogin is false
    }
    const paperStyle = {
        padding: 20,
        height: '50vh',
        width: '320px',
    }
    return (
        // <div className='center-form'>
        <Grid className='center-form' sx={{ backgroundColor: 'black'}} textAlign='center' fontSize='30px'>
            <Paper elevation={10} style={paperStyle}>
                <h2 style={{ color: pink[500] }}>Log in</h2>
                <TextField style={{ color: 'white' }} label='Username' placeholder='Enter username' fullWidth required />
                <TextField style={{ color: 'white' }} className='mt-3' label='Password' placeholder='Enter password' type='password' fullWidth required />
                {/* <FormControlLabel control={<CheckBox name="checkedB" color='primary' />} label="Remember me" /> */}
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Grid>
                    <Button className='mr-2' variant="contained" style={{ color: 'black', fontWeight: 'bold', backgroundColor: pink[500] }}>Login</Button>
                    <Button onClick={() => setOpenLogin(false)} variant="contained" style={{ marginRight: 10, color: pink[500], fontWeight: 'bold', backgroundColor: 'black' }}>Cancel</Button>
                </Grid>

            </Paper>
        </Grid>


        // </div>
    )
}
