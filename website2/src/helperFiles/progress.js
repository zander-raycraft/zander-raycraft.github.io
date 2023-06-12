import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { FaAngleDoubleRight } from 'react-icons/fa';
import "./progress.css"

export const Progress = ({ text, percentage }) => {
  return (
    <div>
      <h2><span><FaAngleDoubleRight/> </span>{text}</h2>
      <LinearProgress
        variant="determinate"
        value={percentage}
        className="custom-progress-bar"
      />
    </div>
  );
};

export default Progress;
