import React from 'react';
import { Box, Typography } from '@mui/material';

const PrivacyPolicy = () => (
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="h4" color="primary" fontWeight={700} gutterBottom fontFamily="Inter, Roboto, Arial">
      Privacy Policy
    </Typography>
    <Box sx={{ maxWidth: 700, mx: 'auto', textAlign: 'left', bgcolor: 'white', p: 4, borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="body1" sx={{ color: '#222', fontFamily: 'Inter, Roboto, Arial', lineHeight: 1.8 }}>
        <strong>1. Information We Collect</strong><br/>
        <strong>a) Personal Information</strong><br/>
        We do not require users to provide personal information to use our calculators.<br/>
        However, you may voluntarily provide information (such as email) if you contact us.<br/><br/>
        <strong>b) Non-Personal Information</strong><br/>
        We may collect non-personal data automatically, including:<br/>
        Browser type, Device information, IP address, Pages visited, Time and date of visit, Referring URLs.<br/>
        This data is used only for analytics and performance improvement.<br/><br/>
        <strong>2. How We Use Information</strong><br/>
        We use collected information to:<br/>
        Improve website functionality and user experience, Analyze site usage trends, Monitor and prevent fraud or abuse, Display relevant advertisements.<br/>
        <span style={{color:'#0e7c7b', fontWeight:600}}>✅ We do not sell, rent, or trade your personal data.</span><br/><br/>
        <strong>3. Financial Calculations Disclaimer</strong><br/>
        All calculators provided on this website are for informational and educational purposes only.<br/>
        The results are estimates and should not be considered financial, legal, or investment advice.<br/>
        Users are advised to consult qualified professionals before making financial decisions.<br/><br/>
        <strong>4. Cookies and Web Beacons</strong><br/>
        We use cookies to improve your experience, store preferences, and serve relevant ads. Cookies are small files stored on your device. You can disable cookies in your browser settings, but some features may not work as intended.<br/><br/>
        <strong>5. Google AdSense & Third-Party Ads</strong><br/>
        We display ads from Google AdSense and other third-party networks. These partners may use cookies and web beacons to show ads based on your prior visits to our site or other sites. Ad networks may collect non-personal data (such as browser type, device info, and IP address) to personalize ads.<br/><br/>
        <strong>6. Google DoubleClick Cookie</strong><br/>
        Google, as a third-party vendor, uses the DoubleClick cookie to serve ads to users based on their visit to our site and other sites on the Internet. You may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting Google Ad Settings.<br/><br/>
        <strong>7. Analytics Usage</strong><br/>
        We use Google Analytics and similar tools to understand how visitors use our site. These services collect non-personal data such as pages visited, time spent, and device information. This helps us improve our content and user experience. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.<br/><br/>
        <strong>8. User Consent</strong><br/>
        By using our website, you consent to our Privacy Policy, including the use of cookies, analytics, and advertising technologies. You may withdraw consent at any time by adjusting your browser settings or contacting us.<br/><br/>
        <strong>9. Data Security</strong><br/>
        We take reasonable measures to protect your information.<br/>
        However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.<br/><br/>
        <strong>10. Children’s Information</strong><br/>
        Our website is not intended for children under the age of 13.<br/>
        We do not knowingly collect personal data from children.<br/>
        If you believe your child has provided personal information on our website, please contact us, and we will promptly remove it.<br/><br/>
        <strong>11. Your Consent</strong><br/>
        By using our website, you hereby consent to this Privacy Policy and agree to its terms.<br/><br/>
        <strong>12. Updates to This Policy</strong><br/>
        We may update this Privacy Policy from time to time.<br/>
        Any changes will be posted on this page with an updated “Last updated” date.<br/><br/>
        <strong>13. Contact Us</strong><br/>
        If you have any questions about this Privacy Policy, you can contact us at:<br/>
        📧 Email: <span style={{color:'#0e7c7b'}}>your-email@example.com</span><br/>
        🌐 Website: <span style={{color:'#0e7c7b'}}>yourdomain.com</span>
      </Typography>
    </Box>
  </Box>
);

export default PrivacyPolicy;
