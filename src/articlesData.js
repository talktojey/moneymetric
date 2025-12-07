// List of articles (add more as needed)
export const articles = [
  {
    id: 'emi-calculation',
    title: 'How EMI is Calculated',
    summary: 'Understand the formula and process behind Equated Monthly Installment (EMI) calculations.',
    content: `
      <strong>What is EMI?</strong><br/>
      EMI (Equated Monthly Installment) is the fixed payment amount made by a borrower to a lender at a specified date each calendar month.<br/><br/>
      <strong>EMI Formula:</strong><br/>
      EMI = [P × r × (1 + r)^n] / [(1 + r)^n – 1]<br/>
      Where:<br/>
      P = Principal loan amount<br/>
      r = Monthly interest rate (annual rate / 12 / 100)<br/>
      n = Number of monthly installments<br/><br/>
      <strong>Example:</strong><br/>
      For a loan of ₹1,00,000 at 10% annual interest for 12 months:<br/>
      r = 10 / 12 / 100 = 0.00833<br/>
      n = 12<br/>
      EMI = [100000 × 0.00833 × (1 + 0.00833)^12] / [(1 + 0.00833)^12 – 1] ≈ ₹8,791.59<br/><br/>
      <strong>Why use EMI?</strong><br/>
      EMI helps you plan your monthly budget and understand your repayment obligations.
    `
  },
  {
    id: 'smart-money-management-2026',
    title: 'How to Manage Your Money the Smart Way in 2026',
    summary: 'A step-by-step, actionable guide to managing your money in 2026: budgeting, debt, investing, insurance, and more.',
    content: `
      <strong>Intro:</strong><br/>
      2026 brings faster digital finance tools, rising costs, new government schemes, and more accessible investment options. Managing money well still comes down to fundamentals — clarity, discipline, and smart use of tools. This guide walks you through clear, practical steps you can apply today and sustain all year long.<br/><br/>
      <strong>1. Set clear financial goals (short, medium, long)</strong><br/>
      Write down goals with amounts and target dates.<br/>
      <ul>
        <li><strong>Short-term (0–12 months):</strong> emergency fund, phone replacement, travel (e.g. ₹30,000 by Dec 2026)</li>
        <li><strong>Medium-term (1–5 years):</strong> down payment, wedding, startup seed (e.g. ₹3,00,000 in 3 years)</li>
        <li><strong>Long-term (5+ years):</strong> retirement corpus, children’s education</li>
      </ul>
      Why: Goals determine savings rate and asset allocation.<br/><br/>
      <strong>2. Know your cash flows — create a simple budget</strong><br/>
      Track income and expenses for one month. Use the 50/30/20 rule as a starting point.<br/>
      <em>Example: Monthly net salary = ₹50,000</em><br/>
      <ul>
        <li>50% (Needs) = 50,000 × 0.50 = 25,000</li>
        <li>30% (Wants) = 50,000 × 0.30 = 15,000</li>
        <li>20% (Savings & Investments) = 50,000 × 0.20 = 10,000</li>
      </ul>
      <em>Digit-by-digit:</em><br/>
      50,000 × 0.50 = 25,000 → (50,000 * 50 / 100 = 2,500,000/100 = 25,000)<br/>
      50,000 × 0.30 = 15,000 → (50,000 * 30 / 100 = 1,500,000/100 = 15,000)<br/>
      50,000 × 0.20 = 10,000 → (50,000 * 20 / 100 = 1,000,000/100 = 10,000)<br/>
      Tips: If savings < 20%, cut wants first. Use a spreadsheet or finance app to categorize automatically.<br/><br/>
      <strong>3. Build an emergency fund — the foundation</strong><br/>
      Aim for 3–12 months of essential expenses. Typical target: 6 months.<br/>
      <em>Example calculation:</em> Monthly essential expenses = ₹30,000 → Emergency fund = 30,000 × 6 = ₹180,000.<br/>
      Where to park it: High-yield savings, liquid funds, sweep accounts, or ultra-short-term debt funds.<br/><br/>
      <strong>4. Pay down high-cost debt (priority)</strong><br/>
      List debts by interest rate. Pay extra toward the highest-rate debt (avalanche method saves most interest).<br/>
      <em>Example:</em> Card A: ₹50,000 @ 24% APR; Personal loan: ₹1,50,000 @ 14% APR. Focus extra payments on Card A first.<br/><br/>
      <strong>5. Automate savings & investments</strong><br/>
      Set up auto-transfer to savings/investment account on payday. Use SIPs for mutual funds/index funds. Automate recurring deposits.<br/><br/>
      <strong>6. Asset allocation & building the investment plan</strong><br/>
      Simple rule: Age-based equity allocation = 100 − age.<br/>
      <ul>
        <li>Young, 30 years: Equity 80%, Debt 15%, Cash/Gold 5%</li>
        <li>Near-retirement, 55 years: Equity 40%, Debt 45%, Cash/Short-term 15%</li>
      </ul>
      Products: Equity index funds, debt funds, gold, direct stocks (if you understand them).<br/><br/>
      <strong>7. Retirement planning — start early</strong><br/>
      Use SIPs in equity index funds. Example: ₹2 crore corpus in 25 years @12% return needs SIP of ₹8,000–₹9,000/month.<br/><br/>
      <strong>8. Tax planning</strong><br/>
      Use tax-saving instruments (ELSS, PPF) if aligned with goals. Optimize tax regime. Keep digital records.<br/><br/>
      <strong>9. Insurance — protect your downside</strong><br/>
      Health insurance, term life insurance, asset/property insurance as needed. Insurance is protection, not investment.<br/><br/>
      <strong>10. Use the right digital tools (2026-forward)</strong><br/>
      Budgeting apps, net-worth trackers, robo-advisors, calculator pages (like MoneyMetric!). Use strong passwords and 2FA.<br/><br/>
      <strong>11. Diversify income — side income & skill monetization</strong><br/>
      Freelancing, consulting, digital products, monetized content. Even ₹5,000–10,000/month compounds into freedom.<br/><br/>
      <strong>12. Inflation & cost-of-living — beat it with returns</strong><br/>
      Aim for real returns (nominal − inflation). Example: 12% equity − 5% inflation = 7% real return.<br/><br/>
      <strong>13. Periodic review & rebalance</strong><br/>
      Monthly: budget check. Quarterly: net worth snapshot. Annually: re-evaluate goals, tax, insurance. Rebalance if needed.<br/><br/>
      <strong>14. Behavioural money rules</strong><br/>
      Pay yourself first. Avoid lifestyle inflation. Emergency fund is sacrosanct. Keep learning.<br/><br/>
      <strong>15. Practical monthly checklist</strong><br/>
      1. Transfer SIP/FD/RD on salary day.<br/>
      2. Pay off credit card balance.<br/>
      3. Check high-interest debt.<br/>
      4. Update net worth.<br/>
      5. Read a finance article.<br/><br/>
      <strong>16. Quick calculators & formulas</strong><br/>
      EMI: [P × r × (1 + r)^n] / [(1 + r)^n − 1]<br/>
      SIP FV: SIP × [((1 + r)^n − 1) / r] × (1 + r)<br/>
      Emergency fund: Monthly expenses × months of cover<br/><br/>
      <strong>17. Common mistakes to avoid</strong><br/>
      Chasing returns without understanding risk. Ignoring inflation. Excessive trading. Not having a written plan.<br/><br/>
      <strong>18. Sample 1-year plan</strong><br/>
      Month 1–2: Track expenses, set goals, build buffer.<br/>
      Month 3–4: Emergency fund auto-deposit, start SIPs.<br/>
      Month 5–6: Clear high-rate debt.<br/>
      Month 7–9: Optimize insurance/tax-saving.<br/>
      Month 10–12: Review/rebalance, plan next year.<br/><br/>
      <strong>19. Security & fraud prevention</strong><br/>
      Enable 2FA, avoid public Wi-Fi, verify receipts, review statements.<br/><br/>
      <strong>20. Final: Simple formula for success in 2026</strong><br/>
      1. Automate savings → 2. Eliminate high-interest debt → 3. Invest in low-cost diversified equity → 4. Keep insurance & emergency fund → 5. Review annually<br/><br/>
      <strong>TL;DR — 8 practical actions to start today</strong><br/>
      1. Write 3 financial goals.<br/>
      2. Make a budget, save 20%.<br/>
      3. Build emergency fund.<br/>
      4. Eliminate high-interest debt.<br/>
      5. Start equity SIP.<br/>
      6. Buy term + health insurance.<br/>
      7. Automate on payday.<br/>
      8. Review quarterly, rebalance yearly.<br/><br/>
     
    `
  }
];
