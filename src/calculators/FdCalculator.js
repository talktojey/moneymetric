import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateFD(principal, rate, years, compounding = 1) {
  return principal * Math.pow(1 + rate / (100 * compounding), compounding * years);
}

const FdCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [compounding, setCompounding] = useState('1');
  const [maturity, setMaturity] = useState(null);
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
      const value = calculateFD(Number(principal), Number(rate), Number(years), Number(compounding));
      setMaturity(value);
    } else {
      setMaturity(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          FD Calculator
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
          <Slider min={1} max={20} step={1} value={years ? Number(years) : 5} onChange={(_, v) => setYears(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={years} onChange={e => setYears(e.target.value)} fullWidth variant="outlined" error={!!errors.years} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.years && <FormHelperText error>{errors.years}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Compounding Frequency (per year)</Typography>
          <Slider min={1} max={12} step={1} value={compounding ? Number(compounding) : 1} onChange={(_, v) => setCompounding(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={compounding} onChange={e => setCompounding(e.target.value)} fullWidth variant="outlined" InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} helperText="E.g. 1=Yearly, 2=Half-Yearly, 4=Quarterly, 12=Monthly" />

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Maturity Amount
          </Button>
          {maturity !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Maturity Amount: ₹{maturity.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>
        <Typography variant="h5" gutterBottom color="primary">How does the FD Calculator work?</Typography>
        <Typography variant="body1" paragraph>
          The FD (Fixed Deposit) Calculator helps you estimate the maturity amount of your fixed deposit investment. It uses the formula:
          <br /><strong>Maturity Amount = Principal × (1 + r/n)<sup>nt</sup></strong>
          <br />where <strong>r</strong> is the annual interest rate, <strong>n</strong> is the number of compounding periods per year, and <strong>t</strong> is the tenure in years.
        </Typography>
        <Typography variant="body1" paragraph>
          This tool is important for planning your savings and understanding how your money grows in a fixed deposit over time.
        </Typography>
      </Paper>
    </Box>
  );
};

export default FdCalculator;
