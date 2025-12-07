import React from 'react';
import Placeholder from '../Placeholder';
import { Box, Typography } from '@mui/material';

const Disclaimer = () => (
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="h4" color="primary" fontWeight={700} gutterBottom fontFamily="Inter, Roboto, Arial">
      Disclaimer
    </Typography>
    <Box sx={{ maxWidth: 700, mx: 'auto', textAlign: 'left', bgcolor: 'white', p: 4, borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="body1" sx={{ color: '#222', fontFamily: 'Inter, Roboto, Arial', lineHeight: 1.8 }}>
        The information provided by MoneyMetric calculators is for educational purposes only and should not be considered financial advice.<br/><br/>
        Please consult a qualified financial advisor before making any financial decisions.<br/><br/>
        <span style={{color:'#0e7c7b', fontWeight:600}}>MoneyMetric is not responsible for any actions taken based on calculator results.</span>
      </Typography>
    </Box>
  </Box>
);

export default Disclaimer;
