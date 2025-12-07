import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateCreditCardInterest(balance, rate, months) {
  const monthlyRate = rate / 12 / 100;
  return balance * monthlyRate * months;
}

const CreditCardInterestCalculator = () => {
  const [balance, setBalance] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [interest, setInterest] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!balance || Number(balance) <= 0) newErrors.balance = 'Outstanding balance is required and must be positive.';
    if (!rate || Number(rate) <= 0) newErrors.rate = 'Interest rate is required and must be positive.';
    if (!months || Number(months) <= 0) newErrors.months = 'Months is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const interestValue = calculateCreditCardInterest(Number(balance), Number(rate), Number(months));
      setInterest(interestValue);
    } else {
      setInterest(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Credit Card Interest Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Outstanding Balance (₹)</Typography>
          <Slider min={1000} max={1000000} step={500} value={balance ? Number(balance) : 10000} onChange={(_, v) => setBalance(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={balance} onChange={e => setBalance(e.target.value)} fullWidth variant="outlined" error={!!errors.balance} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.balance && <FormHelperText error>{errors.balance}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Interest Rate (% per annum)</Typography>
          <Slider min={5} max={48} step={0.1} value={rate ? Number(rate) : 24} onChange={(_, v) => setRate(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={rate} onChange={e => setRate(e.target.value)} fullWidth variant="outlined" error={!!errors.rate} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.rate && <FormHelperText error>{errors.rate}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Months</Typography>
          <Slider min={1} max={36} step={1} value={months ? Number(months) : 6} onChange={(_, v) => setMonths(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={months} onChange={e => setMonths(e.target.value)} fullWidth variant="outlined" error={!!errors.months} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.months && <FormHelperText error>{errors.months}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Interest
          </Button>
          {interest !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Estimated Interest: ₹{interest.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default CreditCardInterestCalculator;
