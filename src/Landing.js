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

const getGridSize = () => {
  if (window.innerWidth < 600) return 12;
  if (window.innerWidth < 900) return 6;
  return 4;
};

const Landing = () => {
  const [gridSize, setGridSize] = React.useState(getGridSize());

  React.useEffect(() => {
    const handleResize = () => setGridSize(getGridSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom fontWeight={700}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}></Link>
        </Typography>
        <Typography variant="h4" align="center" fontWeight={600} gutterBottom sx={{ color: '#0e7c7b' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#0e7c7b' }}>MoneyMetric</Link>
        </Typography>
        <Typography variant="h6" align="center" paragraph sx={{ color: '#0e7c7b', fontWeight: 500 }}>
          Choose a calculator below to get started
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2, md: 4 }, pb: 2 }}>
        <Grid container spacing={2}>
          {calculators.map((calc) => (
            <Grid item xs={12} sm={gridSize} md={gridSize} key={calc.path}>
              <Card elevation={3} sx={{ minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                <CardActionArea component={Link} to={calc.path} sx={{ width: '100%', height: '100%' }}>
                  <CardContent sx={{ p: { xs: 1, sm: 2 }, textAlign: 'center' }}>
                    <Typography variant="h6" align="center" sx={{ fontSize: { xs: 15, sm: 17 }, wordBreak: 'break-word' }}>
                      {calc.label}
                    </Typography>
                    {/* Removed EMI Calculator explanation and placeholder for other explanations from the landing page. Only calculator label is shown. */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer style={{ marginTop: 32, padding: 16, textAlign: 'center', background: '#f5f5f5', borderRadius: 8, fontSize: '1rem', width: '100%' }}>
        <Link to="/privacy-policy" style={{ margin: '0 12px' }}>Privacy Policy</Link>
        <Link to="/about" style={{ margin: '0 12px' }}>About Us</Link>
        <Link to="/contact-us" style={{ margin: '0 12px' }}>Contact Us</Link>
        <Link to="/disclaimer" style={{ margin: '0 12px' }}>Disclaimer</Link>
      </footer>
    </>
  );
};

export default Landing;
