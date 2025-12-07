import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateInflation(value, rate, years) {
  return value * Math.pow(1 + rate / 100, years);
}

const InflationCalculator = () => {
  const [value, setValue] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!value || Number(value) <= 0) newErrors.value = 'Current value is required and must be positive.';
    if (!rate || Number(rate) <= 0) newErrors.rate = 'Inflation rate is required and must be positive.';
    if (!years || Number(years) <= 0) newErrors.years = 'Years is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const result = calculateInflation(Number(value), Number(rate), Number(years));
      setFutureValue(result);
    } else {
      setFutureValue(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Inflation Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Current Value (₹)</Typography>
          <Slider min={1000} max={1000000} step={1000} value={value ? Number(value) : 10000} onChange={(_, v) => setValue(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={value} onChange={e => setValue(e.target.value)} fullWidth variant="outlined" error={!!errors.value} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.value && <FormHelperText error>{errors.value}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Inflation Rate (% p.a.)</Typography>
          <Slider min={1} max={20} step={0.1} value={rate ? Number(rate) : 6} onChange={(_, v) => setRate(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={rate} onChange={e => setRate(e.target.value)} fullWidth variant="outlined" error={!!errors.rate} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.rate && <FormHelperText error>{errors.rate}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Years</Typography>
          <Slider min={1} max={50} step={1} value={years ? Number(years) : 10} onChange={(_, v) => setYears(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={years} onChange={e => setYears(e.target.value)} fullWidth variant="outlined" error={!!errors.years} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.years && <FormHelperText error>{errors.years}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Future Value
          </Button>
          {futureValue !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Future Value: ₹{futureValue.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default InflationCalculator;
