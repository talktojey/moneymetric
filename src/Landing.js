import React from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const calculators = [
  { path: '/emi-calculator', label: 'EMI Calculator' },
  { path: '/personal-loan-interest-calculator', label: 'Personal Loan Interest Calculator' },
  { path: '/credit-card-interest-calculator', label: 'Credit Card Interest Calculator' },
  { path: '/loan-eligibility-calculator', label: 'Loan Eligibility Calculator' },
  { path: '/sip-calculator', label: 'SIP Calculator' },
  { path: '/lumpsum-calculator', label: 'Lumpsum Calculator' },
  { path: '/fd-calculator', label: 'FD Calculator' },
  { path: '/rd-calculator', label: 'RD Calculator' },
  { path: '/gratuity-calculator', label: 'Gratuity Calculator' },
  { path: '/income-tax-calculator', label: 'Income Tax Calculator' },
  { path: '/salary-breakup-calculator', label: 'Salary Breakup Calculator' },
  { path: '/inflation-calculator', label: 'Inflation Calculator' },
];

const Landing = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" align="center" gutterBottom fontWeight={700}>
      Money Metric
    </Typography>
    <Typography variant="h6" align="center" color="text.secondary" paragraph>
      Choose a calculator below to get started
    </Typography>
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {calculators.map((calc) => (
        <Grid item xs={12} sm={6} md={4} key={calc.path}>
          <Card elevation={3}>
            <CardActionArea component={Link} to={calc.path}>
              <CardContent>
                <Typography variant="h6" align="center">
                  {calc.label}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Landing;
