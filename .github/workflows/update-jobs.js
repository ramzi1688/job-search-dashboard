const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Job opportunities (hardcoded for now - we'll add web scraping next)
const opportunities = [
  {
    track: 'Realistic',
    priority: 'P1',
    company: 'Saudi Aramco',
    industry: 'Oil & Gas',
    location: 'Dhahran, Saudi Arabia',
    role: 'Maintenance Engineering Specialist',
    directLink: 'https://www.aramco.jobs/search-jobs?q=maintenance',
    salary: 'SAR 180K–220K',
    basis: 'Posted',
    fit: 8,
    shortlist: '65–75%',
    recruiter: 'Internal (HSSE)',
    signal: 'Directly seeks 10+ years O&G maintenance expertise with JIG standards knowledge',
    whyFits: 'Your 12 years at MCRA with JIG certification + cathodic protection rehab directly match their Asset Maintenance Solution Department.',
    watchOuts: 'Aramco prefers internal Saudi promotions; expatriate slots are limited.',
    cvAngle: 'Lead with JIG audit elevation, cathodic protection system rehab, pipeline integrity work (API 653).'
  },
  {
    track: 'Realistic',
    priority: 'P2',
    company: 'SABIC',
    industry: 'Petrochemicals',
    location: 'Jubail, Saudi Arabia',
    role: 'Plant Operations Manager',
    directLink: 'https://www.sabic.com/en/careers',
    salary: 'SAR 200K–260K',
    basis: 'Posted',
    fit: 7,
    shortlist: '55–70%',
    recruiter: 'Third-party',
    signal: 'Actively hiring operations leads for petrochemical complexes',
    whyFits: 'Large-scale asset management, preventive maintenance scaling, team leadership map your background.',
    watchOuts: 'Highly structured internal advancement.',
    cvAngle: 'Emphasize team development, 7% OPEX cost reduction, compliance track record.'
  }
  // Add more opportunities here...
];

function generateDashboardHTML() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Generate your HTML dashboard with opportunities
  // (This is simplified - full version would have all the styling)
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Job Search Dashboard - ${today}</title>
</head>
<body>
  <h1>Job Search Intelligence Dashboard</h1>
  <p>${today}</p>
  <table>
    <tr>
      <th>Priority</th>
      <th>Track</th>
      <th>Role</th>
      <th>Company</th>
      <th>Fit</th>
      <th>Link</th>
    </tr>
`;

  opportunities.forEach(opp => {
    html += `<tr>
      <td>${opp.priority}</td>
      <td>${opp.track}</td>
      <td>${opp.role}</td>
      <td>${opp.company}</td>
      <td>${opp.fit}/10</td>
      <td><a href="${opp.directLink}" target="_blank">View ↗</a></td>
    </tr>`;
  });

  html += `</table>
</body>
</html>`;

  return html;
}

// Generate and save the file
const dashboard = generateDashboardHTML();
const filename = `Job_Search_Dashboard_Updated_${new Date().toISOString().split('T')[0]}.html`;
fs.writeFileSync(filename, dashboard);

console.log(`✅ Dashboard updated: ${filename}`);
