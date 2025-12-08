import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateSIP(monthly, rate, years) {
  const n = years * 12;
  const r = rate / 12 / 100;
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

const SipCalculator = () => {
  const [monthly, setMonthly] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!monthly || Number(monthly) <= 0) newErrors.monthly = 'Monthly investment is required and must be positive.';
    if (!rate || Number(rate) <= 0) newErrors.rate = 'Return rate is required and must be positive.';
    if (!years || Number(years) <= 0) newErrors.years = 'Investment period is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const value = calculateSIP(Number(monthly), Number(rate), Number(years));
      setFutureValue(value);
    } else {
      setFutureValue(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          SIP Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Monthly Investment (₹)</Typography>
          <Slider min={500} max={100000} step={500} value={monthly ? Number(monthly) : 5000} onChange={(_, v) => setMonthly(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={monthly} onChange={e => setMonthly(e.target.value)} fullWidth variant="outlined" error={!!errors.monthly} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.monthly && <FormHelperText error>{errors.monthly}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Expected Return Rate (% p.a.)</Typography>
          <Slider min={1} max={20} step={0.1} value={rate ? Number(rate) : 10} onChange={(_, v) => setRate(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={rate} onChange={e => setRate(e.target.value)} fullWidth variant="outlined" error={!!errors.rate} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.rate && <FormHelperText error>{errors.rate}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Investment Period (years)</Typography>
          <Slider min={1} max={30} step={1} value={years ? Number(years) : 10} onChange={(_, v) => setYears(String(v))} sx={{ mb: 1 }} />
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
        <Typography variant="h5" gutterBottom color="primary">How does the SIP Calculator work?</Typography>
        <Typography variant="body1" paragraph>
          The SIP (Systematic Investment Plan) Calculator helps you estimate the future value of your regular investments in mutual funds. It uses the formula:
          <br /><strong>Future Value = SIP Amount × [ (1 + r)<sup>n</sup> – 1 ] / r × (1 + r)</strong>
          <br />where <strong>r</strong> is the periodic rate of return and <strong>n</strong> is the number of periods.
        </Typography>
        <Typography variant="body1" paragraph>
          This tool is important for planning your investments and achieving your financial goals. It helps you understand how your money grows over time with regular contributions.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SipCalculator;
