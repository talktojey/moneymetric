import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateLumpsum(principal, rate, years) {
  return principal * Math.pow(1 + rate / 100, years);
}

const LumpsumCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!principal || Number(principal) <= 0) newErrors.principal = 'Principal amount is required and must be positive.';
    if (!rate || Number(rate) <= 0) newErrors.rate = 'Interest rate is required and must be positive.';
    if (!years || Number(years) <= 0) newErrors.years = 'Tenure is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const value = calculateLumpsum(Number(principal), Number(rate), Number(years));
      setFutureValue(value);
    } else {
      setFutureValue(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Lumpsum Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Principal Amount (₹)</Typography>
          <Slider min={10000} max={10000000} step={1000} value={principal ? Number(principal) : 100000} onChange={(_, v) => setPrincipal(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={principal} onChange={e => setPrincipal(e.target.value)} fullWidth variant="outlined" error={!!errors.principal} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.principal && <FormHelperText error>{errors.principal}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Interest Rate (% p.a.)</Typography>
          <Slider min={1} max={20} step={0.1} value={rate ? Number(rate) : 7} onChange={(_, v) => setRate(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={rate} onChange={e => setRate(e.target.value)} fullWidth variant="outlined" error={!!errors.rate} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.rate && <FormHelperText error>{errors.rate}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Tenure (years)</Typography>
          <Slider min={1} max={30} step={1} value={years ? Number(years) : 5} onChange={(_, v) => setYears(String(v))} sx={{ mb: 1 }} />
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

export default LumpsumCalculator;
