import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Landing from './Landing';
import {
  EmiCalculator,
  PersonalLoanInterestCalculator,
  CreditCardInterestCalculator,
  LoanEligibilityCalculator,
  SipCalculator,
  LumpsumCalculator,
  FdCalculator,
  RdCalculator,
  GratuityCalculator,
  IncomeTaxCalculator,
  SalaryBreakupCalculator,
  InflationCalculator,
  About,
  Disclaimer,
  PrivacyPolicy
} from './pages';
import ArticlesList from './ArticlesList';
import ArticlePage from './ArticlePage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/emi-calculator" element={<EmiCalculator />} />
          <Route path="/personal-loan-interest-calculator" element={<PersonalLoanInterestCalculator />} />
          <Route path="/credit-card-interest-calculator" element={<CreditCardInterestCalculator />} />
          <Route path="/loan-eligibility-calculator" element={<LoanEligibilityCalculator />} />
          <Route path="/sip-calculator" element={<SipCalculator />} />
          <Route path="/lumpsum-calculator" element={<LumpsumCalculator />} />
          <Route path="/fd-calculator" element={<FdCalculator />} />
          <Route path="/rd-calculator" element={<RdCalculator />} />
          <Route path="/gratuity-calculator" element={<GratuityCalculator />} />
          <Route path="/income-tax-calculator" element={<IncomeTaxCalculator />} />
          <Route path="/salary-breakup-calculator" element={<SalaryBreakupCalculator />} />
          <Route path="/inflation-calculator" element={<InflationCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
