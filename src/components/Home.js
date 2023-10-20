import { Button, TextField } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';

export default function Home() {
  return (
    <div>
      <img className='w-full' src='images/Netflix-background.jpg' />
      <input
        placeholder='Search name'
        style={{
          backgroundColor: 'white',
          position: 'relative', 
          top: '-799px',
          left: '300px',
          width: '400px',
          padding: '10px',
          borderRadius: '10px'
        }}
      />
      <Button
        variant="contained"
        style={{
          backgroundColor: pink[500],
          position: 'relative', 
          top: '-800px', 
          left: '310px',
          height: '65px'
        }}
      >
        Search
      </Button>
    </div>
  );
}
