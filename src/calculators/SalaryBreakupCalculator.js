import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

const SalaryBreakupCalculator = () => {
  const [ctc, setCtc] = useState('');
  const [basic, setBasic] = useState(null);
  const [hra, setHra] = useState(null);
  const [special, setSpecial] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!ctc || Number(ctc) <= 0) newErrors.ctc = 'Annual CTC is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const basicVal = Number(ctc) * 0.4;
      const hraVal = basicVal * 0.5;
      const specialVal = Number(ctc) - (basicVal + hraVal);
      setBasic(basicVal);
      setHra(hraVal);
      setSpecial(specialVal);
    } else {
      setBasic(null);
      setHra(null);
      setSpecial(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Salary Breakup Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Annual CTC (₹)</Typography>
          <Slider min={100000} max={10000000} step={10000} value={ctc ? Number(ctc) : 500000} onChange={(_, v) => setCtc(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={ctc} onChange={e => setCtc(e.target.value)} fullWidth variant="outlined" error={!!errors.ctc} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.ctc && <FormHelperText error>{errors.ctc}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Breakup
          </Button>
          {(basic !== null && hra !== null && special !== null) && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h6" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">Basic: ₹{basic.toFixed(2)}</Typography>
              <Typography variant="h6" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">HRA: ₹{hra.toFixed(2)}</Typography>
              <Typography variant="h6" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">Special Allowance: ₹{special.toFixed(2)}</Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default SalaryBreakupCalculator;
