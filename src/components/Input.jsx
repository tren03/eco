import React from 'react';
import './Input.css'; // Import the CSS file for styling
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Input({ placeholder, buttonText, onSubmit }) {
  const handleSubmit = () => {
    setInputValue(''); // Clear input after submitting
  };

  return (
    <div className="input-container" > 
      <p>Subscribe to receive updates on blogs, future launches and more !</p>
      <div className="input-wrapper">
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ width: '300px' }} // Adjust width as needed
      />
      </div>
      <div className='button-wrapper'><Button
        variant="contained"
        endIcon={<SendIcon />}
        style={{ backgroundColor: '#4fec7c', width: '150px' }} // Adjust width as needed
      >
        Send
      </Button>
      </div>
      
    </div>
  );
}
