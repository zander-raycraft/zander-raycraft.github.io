import React, { useState } from 'react';
import { AiFillProject } from "react-icons/ai";
import { Modal, Box, Typography, Button } from '@mui/material';
import './card.css'; // Import the CSS file

export const Card = ({ title, description, Language, relativeImagePath }) => {
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

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '5px',
        fontSize: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'white',
        border: 'none',
        padding: '5px',
        cursor: 'pointer',
      };

    return (
      <div className="card" onClick={handleOpen} style={backgroundImageStyle}>
        <AiFillProject className='icon' />
        <div className="cover">
          <h1>{ title }</h1>
        </div>
        {/* Card content */}
        <Modal open={isOpen} onClose={handleClose}>
          <Box className="modalContainer">
            <Typography className='title' variant="h5" component="div" mb={2}>
              {title}
            </Typography>
            <Typography className="body-p" variant="body2">{description}</Typography>
            <Typography className="body-l" variant="body2">{Language}</Typography>
          <Button
            className="close-button"
            variant="contained"
            onClick={handleClose}
            style={closeButtonStyle}
          >
            X
          </Button>

          </Box>
        </Modal>
      </div>
    );
};

export default Card;
