import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateEMI(P, R, N) {
  const monthlyRate = R / 12 / 100;
  const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1);
  return emi;
}

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
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
      const emiValue = calculateEMI(Number(principal), Number(rate), Number(tenure));
      setEmi(emiValue);
    } else {
      setEmi(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          EMI Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Loan Amount (₹)</Typography>
          <Slider
            min={10000}
            max={10000000}
            step={1000}
            value={principal ? Number(principal) : 100000}
            onChange={(_, v) => setPrincipal(String(v))}
            sx={{ mb: 1 }}
          />
          <TextField
            type="number"
            value={principal}
            onChange={e => setPrincipal(e.target.value)}
            fullWidth
            variant="outlined"
            error={!!errors.principal}
            InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }}
            inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }}
          />
          {errors.principal && <FormHelperText error>{errors.principal}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Interest Rate (% per annum)</Typography>
          <Slider
            min={1}
            max={20}
            step={0.1}
            value={rate ? Number(rate) : 8}
            onChange={(_, v) => setRate(String(v))}
            sx={{ mb: 1 }}
          />
          <TextField
            type="number"
            value={rate}
            onChange={e => setRate(e.target.value)}
            fullWidth
            variant="outlined"
            error={!!errors.rate}
            InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }}
            inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }}
          />
          {errors.rate && <FormHelperText error>{errors.rate}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Tenure (months)</Typography>
          <Slider
            min={6}
            max={360}
            step={1}
            value={tenure ? Number(tenure) : 60}
            onChange={(_, v) => setTenure(String(v))}
            sx={{ mb: 1 }}
          />
          <TextField
            type="number"
            value={tenure}
            onChange={e => setTenure(e.target.value)}
            fullWidth
            variant="outlined"
            error={!!errors.tenure}
            InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }}
            inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }}
          />
          {errors.tenure && <FormHelperText error>{errors.tenure}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate EMI
          </Button>
          {emi !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Monthly EMI: ₹{emi.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default EmiCalculator;
