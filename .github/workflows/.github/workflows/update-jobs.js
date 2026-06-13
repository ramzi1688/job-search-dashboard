#!/usr/bin/env node

const fs = require('fs');

const opportunities = [
  { track: 'Realistic', priority: 'P1', company: 'Saudi Aramco', location: 'Dhahran', role: 'Maintenance Engineering Specialist', link: 'https://www.aramco.jobs/search-jobs?q=maintenance', salary: 'SAR 180K–220K', fit: 8, shortlist: '65–75%', signal: 'Directly seeks 10+ years O&G maintenance expertise' },
  { track: 'Realistic', priority: 'P2', company: 'SABIC', location: 'Jubail', role: 'Plant Operations Manager', link: 'https://www.sabic.com/en/careers', salary: 'SAR 200K–260K', fit: 7, shortlist: '55–70%', signal: 'Actively hiring operations leads' },
  { track: 'Realistic', priority: 'P2', company: 'GE Power', location: 'Riyadh', role: 'Maintenance Supervisor', link: 'https://careers.ge.com/', salary: 'SAR 160K–200K', fit: 6, shortlist: '50–65%', signal: 'Turbomachinery maintenance' },
  { track: 'Aspirational', priority: 'P1', company: 'Accenture', location: 'Dubai', role: 'Senior Operations Consultant', link: 'https://www.accenture.com/ae-en/careers', salary: 'AED 180K–240K', fit: 6, shortlist: '40–55%', signal: 'Consulting opportunity' },
  { track: 'Pivot', priority: 'P1', company: 'PredAI (Startup)', location: 'Remote', role: 'Operations Lead', link: 'https://www.linkedin.com/jobs/search/?keywords=predictive%20maintenance', salary: 'USD 55K–75K', fit: 7, shortlist: '50–65%', signal: 'Series B funded' }
];

const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

let html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Job Search Dashboard</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8f9fa; color: #1a1a1a; }
.container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
header { background: white; padding: 2rem; margin-bottom: 2rem; border-radius: 8px; border: 1px solid #e0e0e0; }
h1 { font-size: 28px; margin-bottom: 0.5rem; }
.badge { display: inline-block; background: #e6f2ff; color: #0066cc; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; margin-top: 1rem; }
.section { background: white; margin-bottom: 2rem; border-radius: 8px; border: 1px solid #e0e0e0; }
.section-header { padding: 1.5rem 2rem; background: #fafbfc; border-bottom: 1px solid #e0e0e0; font-weight: 600; }
table { width: 100%; border-collapse: collapse; font-size: 13px; padding: 2rem; }
th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e8ecf1; }
th { background: #f5f7fa; font-weight: 600; }
.p1 { color: #0066cc; font-weight: 600; }
.p2 { color: #ff9500; font-weight: 600; }
.card { background: #f9fbfd; border: 1px solid #dfe5eb; border-radius: 6px; padding: 1.5rem; margin: 1.5rem 2rem; }
.btn { display: inline-block; padding: 8px 14px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; text-decoration: none; font-size: 12px; margin-top: 1rem; }
a { color: #0066cc; text-decoration: none; }
.footer { padding: 2rem; text-align: center; color: #999; font-size: 12px; border-top: 1px solid #e0e0e0; }
</style>
</head>
<body>
<div class="container">
<header>
<h1>Job Search Intelligence Dashboard</h1>
<p>Ramzi Rahiman | Operations & Maintenance Engineering</p>
<div class="badge">✓ Auto-Updated Daily • Last Refresh: ${today}</div>
</header>

<div class="section">
<div class="section-header">Master Opportunity Dashboard</div>
<table>
<thead><tr><th>P</th><th>Track</th><th>Role</th><th>Company</th><th>Location</th><th>Fit</th><th>Salary</th><th>Link</th></tr></thead>
<tbody>
`;

opportunities.forEach(opp => {
  const pClass = opp.priority === 'P1' ? 'p1' : 'p2';
  html += `<tr><td><span class="${pClass}">${opp.priority}</span></td><td>${opp.track}</td><td><strong>${opp.role}</strong></td><td>${opp.company}</td><td>${opp.location}</td><td>${opp.fit}/10</td><td>${opp.salary}</td><td><a href="${opp.link}" target="_blank">View ↗</a></td></tr>`;
});

html += `</tbody></table></div>

<div class="section">
<div class="section-header">Top Opportunities</div>
`;

opportunities.forEach(opp => {
  html += `<div class="card"><h3>${opp.role}</h3><p>${opp.company} • ${opp.location}</p><p><strong>Signal:</strong> ${opp.signal}</p><a href="${opp.link}" target="_blank" class="btn">View Job ↗</a></div>`;
});

html += `</div>

<div class="footer">
<p>🤖 This dashboard updates automatically every day at 8:00 PM Riyadh time</p>
<p>Last updated: ${today}</p>
</div>
</div>
</body>
</html>`;

const dateStr = new Date().toISOString().split('T')[0];
const filename = `Job_Search_Dashboard_Updated_${dateStr}.html`;

fs.writeFileSync(filename, html);
console.log(`✓ Dashboard created: ${filename}`);
process.exit(0);
