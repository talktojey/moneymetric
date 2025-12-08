import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateIncomeTax(income) {
  // Simple slabs for FY 2025-26 (example, not actual):
  // Up to 2.5L: 0%, 2.5L-5L: 5%, 5L-10L: 20%, Above 10L: 30%
  let tax = 0;
  if (income > 1000000) {
    tax += (income - 1000000) * 0.3;
    income = 1000000;
  }
  if (income > 500000) {
    tax += (income - 500000) * 0.2;
    income = 500000;
  }
  if (income > 250000) {
    tax += (income - 250000) * 0.05;
  }
  return tax;
}

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!income || Number(income) <= 0) newErrors.income = 'Annual income is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const taxValue = calculateIncomeTax(Number(income));
      setTax(taxValue);
    } else {
      setTax(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Income Tax Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Annual Income (₹)</Typography>
          <Slider min={100000} max={10000000} step={10000} value={income ? Number(income) : 500000} onChange={(_, v) => setIncome(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={income} onChange={e => setIncome(e.target.value)} fullWidth variant="outlined" error={!!errors.income} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.income && <FormHelperText error>{errors.income}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Tax
          </Button>
          {tax !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Estimated Tax: ₹{tax.toFixed(2)}
              </Typography>
            </Box>
          )}
          <Typography variant="h5" gutterBottom color="primary">How does the Income Tax Calculator work?</Typography>
          <Typography variant="body1" paragraph>
            The Income Tax Calculator helps you estimate your annual tax liability based on your income, deductions, and applicable tax slabs. It uses the formula:
            <br /><strong>Tax = (Gross Income – Deductions) × Tax Rate</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            This tool is important for tax planning, helping you understand your obligations and optimize your savings.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default IncomeTaxCalculator;
