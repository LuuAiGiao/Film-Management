import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { pink, red } from '@mui/material/colors'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
// import { Icon, Navbar } from "react-materialize";

export default function Navigation() {
  const{theme,toggle,dark} = useContext(ThemeContext);

    const [loginForm, setLoginForm] = useState(false);
    const [signinForm, setSigninForm] = useState(false);
    return (
        <div>
            <AppBar style={{backgroundColor: 'black'}}>
            <Toolbar>
                <Typography variant="h6" style={{  }}>
                <img style={{width: '5em'}} src='/images/logo.png' alt='logo' />
                </Typography>
                <Button style={{ fontSize: '14px', marginLeft: '40px' }} color="inherit" component={Link} to="/">Home</Button>
                <Button style={{ fontSize: '14px', marginLeft: '40px' }} color="inherit" component={Link} to="/series">Series</Button>
                <Button style={{ fontSize: '14px', marginLeft: '40px' }} color="inherit" component={Link} to="/films">MyFilms</Button>
                <Button style={{ fontSize: '14px', marginLeft: '40px' }} color="inherit" component={Link} to="/about">About</Button>
                <Button style={{ fontSize: '14px', marginLeft: '40px' }} color="inherit" component={Link} to="/contact">Contact</Button>
                
                <Button onClick={() => setLoginForm(true)} style={{ marginLeft: '640px', color: pink[500], borderColor: pink[500], width: '100px'}} variant="outlined">LOG IN</Button>
                <Button onClick={() => setSigninForm(true)} style={{ marginLeft: '10px', backgroundColor: pink[500], width: '100px' }} variant="contained">SIGN IN</Button>
            </Toolbar>
            
        </AppBar>
        <div className=''>
            <LoginForm openLogin={loginForm} setOpenLogin={setLoginForm} />
            <SigninForm openSignin={signinForm} setOpenSignin={setSigninForm} />
        </div>
        </div>
        
        
    )
}
