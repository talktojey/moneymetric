import React from 'react';
import Placeholder from '../Placeholder';
import { Box, Typography } from '@mui/material';

const About = () => (
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="h4" color="primary" fontWeight={700} gutterBottom fontFamily="Inter, Roboto, Arial">
      About MoneyMetric
    </Typography>
    <Box sx={{ maxWidth: 700, mx: 'auto', textAlign: 'left', bgcolor: 'white', p: 4, borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="body1" sx={{ color: '#222', fontFamily: 'Inter, Roboto, Arial', lineHeight: 1.8 }}>
        Welcome to <span style={{color:'#0e7c7b', fontWeight:600}}>MoneyMetric</span>!<br/><br/>
        Our platform provides a suite of easy-to-use financial calculators to help you make informed decisions about loans, investments, taxes, and more.<br/><br/>
        Whether you are planning your finances or just exploring options, our calculators are designed for accuracy and simplicity.<br/><br/>
        <span style={{color:'#0e7c7b', fontWeight:600}}>Thank you for using MoneyMetric!</span>
      </Typography>
    </Box>
  </Box>
);

export default About;
