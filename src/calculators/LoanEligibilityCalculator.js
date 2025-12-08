import React from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Slider, FormHelperText } from '@mui/material';
import { useState } from 'react';

function calculateLoanEligibility(income, expenses, tenure, rate) {
  const netIncome = income - expenses;
  const monthlyRate = rate / 12 / 100;
  const maxEmi = netIncome * 0.5;
  if (monthlyRate === 0) return maxEmi * tenure;
  const loanAmount = (maxEmi * (Math.pow(1 + monthlyRate, tenure) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, tenure));
  return loanAmount;
}

const LoanEligibilityCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [tenure, setTenure] = useState('');
  const [rate, setRate] = useState('');
  const [eligibility, setEligibility] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!income || Number(income) <= 0) newErrors.income = 'Monthly income is required and must be positive.';
    if (!expenses || Number(expenses) < 0) newErrors.expenses = 'Monthly expenses must be zero or positive.';
    if (!tenure || Number(tenure) <= 0) newErrors.tenure = 'Tenure is required and must be positive.';
    if (!rate || Number(rate) <= 0) newErrors.rate = 'Interest rate is required and must be positive.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validate()) {
      const eligibleAmount = calculateLoanEligibility(Number(income), Number(expenses), Number(tenure), Number(rate));
      setEligibility(eligibleAmount);
    } else {
      setEligibility(null);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0a2540 0%, #0e7c7b 100%)', minHeight: '100vh', py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 420, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} align="center" fontFamily="Inter, Roboto, Arial">
          Loan Eligibility Calculator
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Monthly Income (₹)</Typography>
          <Slider min={5000} max={500000} step={1000} value={income ? Number(income) : 50000} onChange={(_, v) => setIncome(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={income} onChange={e => setIncome(e.target.value)} fullWidth variant="outlined" error={!!errors.income} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.income && <FormHelperText error>{errors.income}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Monthly Expenses (₹)</Typography>
          <Slider min={0} max={300000} step={1000} value={expenses ? Number(expenses) : 10000} onChange={(_, v) => setExpenses(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={expenses} onChange={e => setExpenses(e.target.value)} fullWidth variant="outlined" error={!!errors.expenses} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.expenses && <FormHelperText error>{errors.expenses}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Tenure (months)</Typography>
          <Slider min={6} max={360} step={1} value={tenure ? Number(tenure) : 60} onChange={(_, v) => setTenure(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={tenure} onChange={e => setTenure(e.target.value)} fullWidth variant="outlined" error={!!errors.tenure} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.tenure && <FormHelperText error>{errors.tenure}</FormHelperText>}

          <Typography fontWeight={600} fontFamily="Inter, Roboto, Arial">Interest Rate (% per annum)</Typography>
          <Slider min={1} max={20} step={0.1} value={rate ? Number(rate) : 8} onChange={(_, v) => setRate(String(v))} sx={{ mb: 1 }} />
          <TextField type="number" value={rate} onChange={e => setRate(e.target.value)} fullWidth variant="outlined" error={!!errors.rate} InputLabelProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} inputProps={{ style: { fontFamily: 'Inter, Roboto, Arial' } }} />
          {errors.rate && <FormHelperText error>{errors.rate}</FormHelperText>}

          <Button variant="contained" color="primary" size="large" onClick={handleCalculate} sx={{ mt: 2, fontFamily: 'Inter, Roboto, Arial', fontWeight: 600 }}>
            Calculate Eligibility
          </Button>
          {eligibility !== null && (
            <Box sx={{ mt: 3, textAlign: 'center', bgcolor: '#e3f2fd', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" color="primary" fontWeight={700} fontFamily="Inter, Roboto, Arial">
                Eligible Loan Amount: ₹{eligibility.toFixed(2)}
              </Typography>
            </Box>
          )}
          <Typography variant="h5" gutterBottom color="primary">How does the Loan Eligibility Calculator work?</Typography>
          <Typography variant="body1" paragraph>
            The Loan Eligibility Calculator helps you estimate the maximum loan amount you can get based on your income and expenses. It typically uses the formula:
            <br /><strong>Eligible Loan = (Net Monthly Income × Eligibility Factor) – Existing EMIs</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            This tool is important for understanding your borrowing capacity and planning your finances before applying for a loan. It helps you avoid rejection and choose the right loan amount.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoanEligibilityCalculator;
