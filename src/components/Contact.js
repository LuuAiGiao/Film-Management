import { Button, TextField } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'

export default function Contact() {
    return (

        <div className='contact bg-light'>
            <h1 className='title' style={{ marginTop: '100px' }}>Contact us</h1>

            <div style={{ marginBottom: '20px' }}>
                <TextField id="outlined-basic" label="Your name" variant="outlined" fullWidth />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <TextField id="outlined-basic" label="Your phone" variant="outlined" fullWidth />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <TextField id="outlined-basic" label="Name of film" variant="outlined" fullWidth />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <TextField id="outlined-basic" label="Your thought" variant="outlined" fullWidth />
            </div>
            <Button style={{ backgroundColor: pink[500], width: '100px', textAlign: 'center', marginLeft: '700px' }} variant="contained">SEND</Button>
        </div>

    )
}
