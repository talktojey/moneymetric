import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateSimpleInterest(P, R, T) {
  return (P * R * T) / 100;
}

const PersonalLoanInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [interest, setInterest] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!principal || Number(principal) <= 0) newErrors.principal = 'Loan amount is required and must be positive.';
    if (!rate || Number(rate) <= 0) newErrors.rate = 'Interest rate is required and must be positive.';
    if (!tenure || Number(tenure) <= 0) newErrors.tenure = 'Tenure is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const interestValue = calculateSimpleInterest(Number(principal), Number(rate), Number(tenure));
      setInterest(interestValue);
    } else {
      setInterest(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Personal Loan Interest Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Loan Amount (₹)</Typography>
          <Slider min={10000} max={10000000} step={1000} value={principal ? Number(principal) : 100000} onChange={(_, v) => setPrincipal(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={principal} onChange={e => setPrincipal(e.target.value)} fullWidth variant="outlined" error={!!errors.principal} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.principal && <FormHelperText error>{errors.principal}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Interest Rate (% per annum)</Typography>
          <Slider min={1} max={20} step={0.1} value={rate ? Number(rate) : 8} onChange={(_, v) => setRate(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={rate} onChange={e => setRate(e.target.value)} fullWidth variant="outlined" error={!!errors.rate} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.rate && <FormHelperText error>{errors.rate}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Tenure (years)</Typography>
          <Slider min={1} max={10} step={1} value={tenure ? Number(tenure) : 2} onChange={(_, v) => setTenure(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={tenure} onChange={e => setTenure(e.target.value)} fullWidth variant="outlined" error={!!errors.tenure} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.tenure && <FormHelperText error>{errors.tenure}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Interest
          </Button>
          {interest !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Total Interest: ₹{interest.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>
        <Typography variant="h5" gutterBottom color="primary">How does the Personal Loan Interest Calculator work?</Typography>
        <Typography variant="body1" paragraph>
          The Personal Loan Interest Calculator helps you estimate the total interest payable on your personal loan. It uses the formula:
          <br /><strong>Interest = (Principal × Rate × Time) / 100</strong>
          <br />where <strong>Principal</strong> is the loan amount, <strong>Rate</strong> is the annual interest rate, and <strong>Time</strong> is the loan tenure in years.
        </Typography>
        <Typography variant="body1" paragraph>
          This calculator is important for understanding the true cost of your loan and planning your repayments. It helps you compare loan offers and choose the best option for your needs.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PersonalLoanInterestCalculator;
