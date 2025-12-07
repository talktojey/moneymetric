import React from 'react';
import { Box, Typography } from '@mui/material';

const Placeholder = ({ title }) => (
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="h4" color="primary" fontWeight={700} gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      This page is under construction. Please check back soon!
    </Typography>
  </Box>
);

export default Placeholder;
