import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateGratuity(salary, years) {
  return (15 / 26) * salary * years;
}

const GratuityCalculator = () => {
  const [salary, setSalary] = useState('');
  const [years, setYears] = useState('');
  const [gratuity, setGratuity] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!salary || Number(salary) <= 0) newErrors.salary = 'Last drawn salary is required and must be positive.';
    if (!years || Number(years) <= 0) newErrors.years = 'Years of service is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const value = calculateGratuity(Number(salary), Number(years));
      setGratuity(value);
    } else {
      setGratuity(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Gratuity Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Last Drawn Salary (₹)</Typography>
          <Slider min={5000} max={500000} step={1000} value={salary ? Number(salary) : 50000} onChange={(_, v) => setSalary(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={salary} onChange={e => setSalary(e.target.value)} fullWidth variant="outlined" error={!!errors.salary} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.salary && <FormHelperText error>{errors.salary}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Years of Service</Typography>
          <Slider min={1} max={50} step={1} value={years ? Number(years) : 5} onChange={(_, v) => setYears(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={years} onChange={e => setYears(e.target.value)} fullWidth variant="outlined" error={!!errors.years} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.years && <FormHelperText error>{errors.years}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Gratuity
          </Button>
          {gratuity !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Gratuity Amount: ₹{gratuity.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default GratuityCalculator;
