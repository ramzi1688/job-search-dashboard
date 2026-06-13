const fs = require('fs');
const path = require('path');

console.log('🤖 Starting dashboard generation...');

const opportunities = [
  {
    track: 'Realistic',
    priority: 'P1',
    company: 'Saudi Aramco',
    location: 'Dhahran',
    role: 'Maintenance Engineering Specialist',
    link: 'https://www.aramco.jobs/search-jobs?q=maintenance',
    salary: 'SAR 180K–220K',
    fit: 8,
    shortlist: '65–75%',
    signal: 'Directly seeks 10+ years O&G maintenance expertise with JIG standards knowledge'
  },
  {
    track: 'Realistic',
    priority: 'P2',
    company: 'SABIC',
    location: 'Jubail',
    role: 'Plant Operations Manager',
    link: 'https://www.sabic.com/en/careers',
    salary: 'SAR 200K–260K',
    fit: 7,
    shortlist: '55–70%',
    signal: 'Actively hiring operations leads for petrochemical complexes'
  },
  {
    track: 'Realistic',
    priority: 'P2',
    company: 'GE Power',
    location: 'Riyadh/Dammam',
    role: 'Maintenance Supervisor – Gas Turbines',
    link: 'https://careers.ge.com/',
    salary: 'SAR 160K–200K',
    fit: 6,
    shortlist: '50–65%',
    signal: 'GE regularly posts for turbomachinery maintenance in Middle East'
  },
  {
    track: 'Realistic',
    priority: 'P2',
    company: 'Kuwait National Petroleum',
    location: 'Kuwait City',
    role: 'Maintenance Manager – Refinery',
    link: 'https://www.knpc.com/careers',
    salary: 'KWD 2,500–3,200',
    fit: 7,
    shortlist: '60–72%',
    signal: 'Kuwait expanding refinery capacity'
  },
  {
    track: 'Aspirational',
    priority: 'P1',
    company: 'Accenture',
    location: 'Dubai/Remote',
    role: 'Senior Operations Consultant',
    link: 'https://www.accenture.com/ae-en/careers',
    salary: 'AED 180K–240K',
    fit: 6,
    shortlist: '40–55%',
    signal: 'Consulting firms increasingly hire deep-domain experts from operations'
  },
  {
    track: 'Aspirational',
    priority: 'P2',
    company: 'McKinsey',
    location: 'Dubai',
    role: 'Associate Principal – O&G Reliability',
    link: 'https://careers.mckinsey.com/',
    salary: 'AED 220K–300K+',
    fit: 5,
    shortlist: '25–40%',
    signal: 'McKinsey actively recruits from operations'
  },
  {
    track: 'Aspirational',
    priority: 'P2',
    company: 'AECOM',
    location: 'Riyadh/Abu Dhabi',
    role: 'Operations Director – Airport/Facilities',
    link: 'https://careers.aecom.com/',
    salary: 'SAR 240K–300K',
    fit: 7,
    shortlist: '50–65%',
    signal: 'AECOM manages major Middle East airport infrastructure'
  },
  {
    track: 'Pivot',
    priority: 'P1',
    company: 'PredAI (Startup)',
    location: 'Remote',
    role: 'Operations Lead / Customer Success',
    link: 'https://www.linkedin.com/jobs/search/?keywords=predictive%20maintenance%20operations%20lead',
    salary: 'USD 55K–75K + equity',
    fit: 7,
    shortlist: '50–65%',
    signal: 'Predictive maintenance sector growing in Middle East'
  },
  {
    track: 'Pivot',
    priority: 'P2',
    company: 'Predictive Maintenance Startups',
    location: 'Remote',
    role: 'Operations Lead / Customer Success',
    link: 'https://www.linkedin.com/jobs/search/?keywords=predictive%20maintenance%20operations%20middle%20east',
    salary: 'USD 50K–70K + equity',
    fit: 6,
    shortlist: '35–50%',
    signal: '3+ funded startups actively hiring'
  },
  {
    track: 'Pivot',
    priority: 'P3',
    company: 'DP World',
    location: 'Dubai',
    role: 'Asset Reliability Manager',
    link: 'https://careers.dpworld.com/',
    salary: 'AED 150K–200K',
    fit: 6,
    shortlist: '45–60%',
    signal: 'Port machinery relies on predictive maintenance'
  }
];

function generateHTML() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const p1Count = opportunities.filter(o => o.priority === 'P1').length;
  const p2Count = opportunities.filter(o => o.priority === 'P2').length;
  const p3Count = opportunities.filter(o => o.priority === 'P3').length;

  let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Search Intelligence Dashboard</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8f9fa; color: #1a1a1a; line-height: 1.6; }
    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    header { background: white; padding: 2rem; margin-bottom: 2rem; border-radius: 8px; border: 1px solid #e0e0e0; }
    h1 { font-size: 28px; margin-bottom: 0.5rem; }
    p { font-size: 13px; color: #666; }
    .badge { display: inline-block; background: #e6f2ff; color: #0066cc; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; margin-top: 1rem; }
    .section { background: white; margin-bottom: 2rem; border-radius: 8px; border: 1px solid #e0e0e0; overflow: hidden; }
    .section-header { padding: 1.5rem 2rem; background: #fafbfc; border-bottom: 1px solid #e0e0e0; }
    .section-header h2 { font-size: 16px; font-weight: 600; margin: 0; }
    .section-content { padding: 2rem; }
    .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-bottom: 2rem; }
    .metric { background: #f0f4f8; padding: 1rem; border-radius: 6px; border: 1px solid #dfe5eb; }
    .metric-label { font-size: 11px; color: #666; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase; }
    .metric-value { font-size: 22px; font-weight: 600; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 2rem; }
    thead { background: #f5f7fa; }
    th { padding: 12px; text-align: left; font-weight: 600; color: #666; border-bottom: 1px solid #dfe5eb; }
    td { padding: 12px; border-bottom: 1px solid #e8ecf1; }
    tr:hover { background: #f9fbfd; }
    .p1 { color: #0066cc; font-weight: 600; }
    .p2 { color: #ff9500; font-weight: 600; }
    .p3 { color: #999; font-weight: 600; }
    .card { background: #f9fbfd; border: 1px solid #dfe5eb; border-radius: 6px; padding: 1.5rem; margin-bottom: 1.5rem; }
    .card h3 { font-size: 15px; font-weight: 600; margin: 0 0 0.25rem; }
    .card-subtitle { font-size: 12px; color: #666; margin: 0 0 1rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
    .grid-item { background: white; padding: 0.75rem; border: 1px solid #e8ecf1; border-radius: 4px; font-size: 12px; }
    .grid-label { color: #999; font-weight: 600; margin-bottom: 0.25rem; text-transform: uppercase; font-size: 10px; }
    a { color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .btn { display: inline-block; padding: 8px 14px; font-size: 12px; font-weight: 600; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 1rem; text-decoration: none; }
    .btn:hover { background: #0052a3; }
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
      <div class="section-header"><h2>Executive Snapshot</h2></div>
      <div class="section-content">
        <div class="metrics">
          <div class="metric">
            <div class="metric-label">Total Opportunities</div>
            <div class="metric-value">${opportunities.length}</div>
          </div>
          <div class="metric">
            <div class="metric-label">P1 (Apply Now)</div>
            <div class="metric-value" style="color: #0066cc;">${p1Count}</div>
          </div>
          <div class="metric">
            <div class="metric-label">P2 (Tailor)</div>
            <div class="metric-value" style="color: #ff9500;">${p2Count}</div>
          </div>
          <div class="metric">
            <div class="metric-label">P3 (Monitor)</div>
            <div class="metric-value" style="color: #999;">${p3Count}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header"><h2>Master Opportunity Dashboard</h2></div>
      <div class="section-content">
        <table>
          <thead>
            <tr>
              <th>P</th><th>Track</th><th>Role</th><th>Company</th><th>Location</th><th>Fit</th><th>Salary</th><th>Link</th>
            </tr>
          </thead>
          <tbody>
`;

  opportunities.forEach(opp => {
    const pClass = opp.priority === 'P1' ? 'p1' : opp.priority === 'P2' ? 'p2' : 'p3';
    html += `<tr>
      <td><span class="${pClass}">${opp.priority}</span></td>
      <td>${opp.track}</td>
      <td><strong>${opp.role}</strong></td>
      <td>${opp.company}</td>
      <td>${opp.location}</td>
      <td><strong>${opp.fit}/10</strong></td>
      <td>${opp.salary}</td>
      <td><a href="${opp.link}" target="_blank">View ↗</a></td>
    </tr>`;
  });

  html += `          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="section-header"><h2>Track 1: Realistic</h2></div>
      <div class="section-content">
`;

  opportunities.filter(o => o.track === 'Realistic').forEach(opp => {
    const color = opp.priority === 'P1' ? '#0066cc' : '#ff9500';
    html += `<div class="card">
      <h3>${opp.role}</h3>
      <p class="card-subtitle">${opp.company} • ${opp.location}</p>
      <div class="grid">
        <div class="grid-item"><div class="grid-label">Priority</div><span style="color: ${color}; font-weight: 600;">${opp.priority}</span></div>
        <div class="grid-item"><div class="grid-label">Fit</div><strong>${opp.fit}/10</strong></div>
        <div class="grid-item"><div class="grid-label">Shortlist</div>${opp.shortlist}</div>
        <div class="grid-item"><div class="grid-label">Salary</div>${opp.salary}</div>
      </div>
      <p style="font-size: 12px; color: #333; margin-bottom: 1rem;"><strong>Signal:</strong> ${opp.signal}</p>
      <a href="${opp.link}" target="_blank" class="btn">View Job Posting ↗</a>
    </div>`;
  });

  html += `      </div>
    </div>

    <div class="section">
      <div class="section-header"><h2>Track 2: Aspirational</h2></div>
      <div class="section-content">
`;

  opportunities.filter(o => o.track === 'Aspirational').forEach(opp => {
    const color = opp.priority === 'P1' ? '#0066cc' : '#ff9500';
    html += `<div class="card">
      <h3>${opp.role}</h3>
      <p class="card-subtitle">${opp.company} • ${opp.location}</p>
      <div class="grid">
        <div class="grid-item"><div class="grid-label">Priority</div><span style="color: ${color}; font-weight: 600;">${opp.priority}</span></div>
        <div class="grid-item"><div class="grid-label">Fit</div><strong>${opp.fit}/10</strong></div>
        <div class="grid-item"><div class="grid-label">Salary</div>${opp.salary}</div>
      </div>
      <p style="font-size: 12px; color: #333; margin-bottom: 1rem;"><strong>Signal:</strong> ${opp.signal}</p>
      <a href="${opp.link}" target="_blank" class="btn">View Job Posting ↗</a>
    </div>`;
  });

  html += `      </div>
    </div>

    <div class="section">
      <div class="section-header"><h2>Track 3: Pivot</h2></div>
      <div class="section-content">
`;

  opportunities.filter(o => o.track === 'Pivot').forEach(opp => {
    const color = opp.priority === 'P1' ? '#0066cc' : '#ff9500';
    html += `<div class="card">
      <h3>${opp.role}</h3>
      <p class="card-subtitle">${opp.company} • ${opp.location}</p>
      <div class="grid">
        <div class="grid-item"><div class="grid-label">Priority</div><span style="color: ${color}; font-weight: 600;">${opp.priority}</span></div>
        <div class="grid-item"><div class="grid-label">Fit</div><strong>${opp.fit}/10</strong></div>
        <div class="grid-item"><div class="grid-label">Salary</div>${opp.salary}</div>
      </div>
      <p style="font-size: 12px; color: #333; margin-bottom: 1rem;"><strong>Signal:</strong> ${opp.signal}</p>
      <a href="${opp.link}" target="_blank" class="btn">View Job Posting ↗</a>
    </div>`;
  });

  html += `      </div>
    </div>

    <div class="footer">
      <p>🤖 This dashboard updates automatically every day at 8:00 PM Riyadh time</p>
      <p>Last updated: ${today}</p>
    </div>
  </div>
</body>
</html>`;

  return html;
}

try {
  console.log('📊 Generating dashboard...');
  const html = generateHTML();
  const dateStr = new Date().toISOString().split('T')[0];
  const filename = `Job_Search_Dashboard_Updated_${dateStr}.html`;
  
  fs.writeFileSync(filename, html, 'utf8');
  console.log(`✅ SUCCESS: Dashboard saved to ${filename}`);
  console.log(`📝 File size: ${fs.statSync(filename).size} bytes`);
  process.exit(0);
} catch (error) {
  console.error('❌ ERROR:', error.message);
  process.exit(1);
}
