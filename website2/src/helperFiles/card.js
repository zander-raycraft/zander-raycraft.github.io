import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import './card.css';

export const Card = ({ title, description, relativeImagePath }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}${relativeImagePath})`,
    };
  
    return (
      <div className="card" onClick={handleOpen} style={backgroundImageStyle}>
        <div className="cover">
            <h1>{ title }</h1>
        </div>
        {/* Card content */}
        <Modal open={isOpen} onClose={handleClose}>
          <Box sx={{ width: 400, bgcolor: 'background.paper', p: 2 }}>
            <Typography variant="h6" component="div" mb={2}>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    );
  };
  

export default Card;
