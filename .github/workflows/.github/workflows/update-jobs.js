const fs = require('fs');

// Your curated job opportunities database
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
    watchOuts: 'Aramco prefers internal Saudi promotions; expatriate slots are limited. Competition is high.',
    cvAngle: 'Lead with JIG audit elevation (Less than Satisfactory → Good), cathodic protection system rehab, pipeline integrity work (API 653), 10% downtime reduction.',
    details: 'Posted on Bayt.com (verified)'
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
    signal: 'Actively hiring operations leads for petrochemical complexes across Middle East',
    whyFits: 'Large-scale asset management, preventive maintenance scaling, team leadership map your background. SABIC prioritizes GCC nationals.',
    watchOuts: 'Highly structured internal advancement. External hires enter at specific grades.',
    cvAngle: 'Emphasize team development, 7% OPEX cost reduction, compliance track record (ISO 9001:2015).',
    details: 'Active hiring phase - use referral network'
  },
  {
    track: 'Realistic',
    priority: 'P2',
    company: 'GE Power',
    industry: 'Power Generation',
    location: 'Riyadh/Dammam',
    role: 'Maintenance Supervisor – Gas Turbines',
    directLink: 'https://careers.ge.com/',
    salary: 'SAR 160K–200K',
    basis: 'Estimated',
    fit: 6,
    shortlist: '50–65%',
    recruiter: 'Internal',
    signal: 'GE regularly posts for turbomachinery maintenance in Middle East',
    whyFits: 'Your predictive maintenance background and large-team supervision apply. GE values structured problem-solvers.',
    watchOuts: 'Turbine work requires OEM-specific certifications. Learning curve on new equipment.',
    cvAngle: 'Highlight condition monitoring trending and downtime prevention initiatives.',
    details: 'Monitor for new postings'
  },
  {
    track: 'Realistic',
    priority: 'P2',
    company: 'Kuwait National Petroleum (KNPC)',
    industry: 'Oil & Gas',
    location: 'Kuwait City',
    role: 'Maintenance Manager – Refinery Operations',
    directLink: 'https://www.knpc.com/careers',
    salary: 'KWD 2,500–3,200',
    basis: 'Posted',
    fit: 7,
    shortlist: '60–72%',
    recruiter: 'Government-linked',
    signal: 'Kuwait expanding refinery capacity; maintenance leadership in demand',
    whyFits: 'GCC relocation-friendly. Refinery processes differ from fuel farm, but PM philosophy transfers.',
    watchOuts: 'Government recruitment favors Kuwait nationals. Processing can be slow.',
    cvAngle: 'Lead with scale: 1,307+ assets managed at MCRA.',
    details: 'Use referral or contact directly'
  },
  {
    track: 'Realistic',
    priority: 'P3',
    company: 'Saudi Electricity Company (SEC)',
    industry: 'Power Utilities',
    location: 'Riyadh',
    role: 'Asset Maintenance Lead',
    directLink: 'https://www.se.com.sa/careers',
    salary: 'SAR 170K–210K',
    basis: 'Market estimate',
    fit: 5,
    shortlist: '40–50%',
    recruiter: 'Government',
    signal: 'Large government entity with stable hiring. Less competitive than corporate.',
    whyFits: 'Your PM methodology and team leadership apply. Government work = stability.',
    watchOuts: 'Bureaucratic hiring. Lower salary than corporate. Limited international exposure.',
    cvAngle: 'Emphasize JIG compliance work and government audit experience.',
    details: 'Stable, long-term opportunity'
  },
  {
    track: 'Aspirational',
    priority: 'P1',
    company: 'Accenture',
    industry: 'Consulting',
    location: 'Dubai/Remote',
    role: 'Senior Operations Consultant (Maintenance & Reliability)',
    directLink: 'https://www.accenture.com/ae-en/careers',
    salary: 'AED 180K–240K',
    basis: 'Market estimate',
    fit: 6,
    shortlist: '40–55%',
    recruiter: 'Third-party',
    signal: 'Consulting firms increasingly hire deep-domain experts from operations',
    whyFits: 'Your PM Scale-up + BCP work shows strategic thinking. Consulting values operational depth.',
    watchOuts: 'Career pivot is risky. Salary may feel lateral. Travel 40–60% expected.',
    cvAngle: 'Reframe as advisory projects. Lead with board-level compliance outcomes.',
    details: 'Career pivot opportunity - requires repositioning'
  },
  {
    track: 'Aspirational',
    priority: 'P2',
    company: 'McKinsey',
    industry: 'Management Consulting',
    location: 'Dubai',
    role: 'Associate Principal – Oil & Gas Reliability',
    directLink: 'https://careers.mckinsey.com/',
    salary: 'AED 220K–300K+',
    basis: 'Market estimate',
    fit: 5,
    shortlist: '25–40%',
    recruiter: 'Direct',
    signal: 'McKinsey actively recruits from operations to staff O&G portfolios',
    whyFits: 'Your JIG/EI/API expertise valuable. PM redesign + BCP show systems thinking.',
    watchOuts: 'Highly competitive. Prefers MBA. External lateral hires face scrutiny.',
    cvAngle: 'Frame as strategic asset optimization. Emphasize JIG/IATA audit coordination.',
    details: 'Stretch opportunity - monitor openings'
  },
  {
    track: 'Aspirational',
    priority: 'P2',
    company: 'AECOM',
    industry: 'Engineering Consulting',
    location: 'Riyadh/Abu Dhabi',
    role: 'Operations Director – Airport/Industrial Facilities',
    directLink: 'https://careers.aecom.com/',
    salary: 'SAR 240K–300K',
    basis: 'Market estimate',
    fit: 7,
    shortlist: '50–65%',
    recruiter: 'Third-party',
    signal: 'AECOM manages major Middle East airport infrastructure; aviation fuel expertise is rare',
    whyFits: 'You have rare KFIA experience. AECOM managing KFIA would value insider knowledge.',
    watchOuts: 'AECOM is matrix-heavy. Operational autonomy may be less than current role.',
    cvAngle: 'Lead with KFIA project portfolio: 88 hydrant pits, cathodic protection system.',
    details: 'Your airport operations expertise is valuable here'
  },
  {
    track: 'Pivot',
    priority: 'P1',
    company: 'PredAI (Predictive Maintenance Startup)',
    industry: 'Energy-Tech',
    location: 'Remote (UK HQ)',
    role: 'Operations Lead / Customer Success Engineer',
    directLink: 'https://www.linkedin.com/jobs/search/?keywords=predictive%20maintenance%20operations%20lead',
    salary: 'USD 55K–75K + equity',
    basis: 'Market estimate',
    fit: 7,
    shortlist: '50–65%',
    recruiter: 'LinkedIn',
    signal: 'Predictive maintenance sector growing. Startups seek domain experts for Middle East expansion.',
    whyFits: 'Your vibration analysis + condition monitoring adds credibility. RCA/CAPA tool proves automation mindset.',
    watchOuts: 'Early-stage risk. Salary lower than corporate. Requires selling mindset.',
    cvAngle: 'Position as "bridge" between operations and technology. Highlight data-driven wins.',
    details: 'Series B funded - active hiring'
  },
  {
    track: 'Pivot',
    priority: 'P2',
    company: 'Predictive Maintenance Startups (Senseye, Augmento)',
    industry: 'Industrial IoT',
    location: 'Remote',
    role: 'Operations Lead / Customer Success',
    directLink: 'https://www.linkedin.com/jobs/search/?keywords=predictive%20maintenance%20operations%20middle%20east',
    salary: 'USD 50K–70K + equity',
    basis: 'Estimated',
    fit: 6,
    shortlist: '35–50%',
    recruiter: 'LinkedIn',
    signal: '3+ funded startups actively hiring in Middle East',
    whyFits: 'Your condition monitoring + RCA experience. Low competition vs corporate.',
    watchOuts: 'Early-stage risk. Equity volatility. Requires customer success mindset.',
    cvAngle: 'Translate technical PM wins into customer ROI. Highlight your RCA/CAPA tool.',
    details: 'Monitor LinkedIn for new postings'
  },
  {
    track: 'Pivot',
    priority: 'P3',
    company: 'DP World (Jebel Ali)',
    industry: 'Port Operations',
    location: 'Dubai',
    role: 'Asset Reliability Manager',
    directLink: 'https://careers.dpworld.com/',
    salary: 'AED 150K–200K',
    basis: 'Market estimate',
    fit: 6,
    shortlist: '45–60%',
    recruiter: 'Third-party',
    signal: 'Port machinery relies on predictive maintenance. Stable employer.',
    whyFits: 'Port fuel handling shares DNA with fuel farm background. Heavy equipment, compliance culture.',
    watchOuts: 'Port ops culture differs. Potential offshore/harsh environment work.',
    cvAngle: 'Emphasize reliability engineering and downtime cost-avoidance.',
    details: 'Adjacent domain - monitor'
  }
];

function generateDashboard() {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const p1Count = opportunities.filter(o => o.priority === 'P1').length;
  const p2Count = opportunities.filter(o => o.priority === 'P2').length;
  const p3Count = opportunities.filter(o => o.priority === 'P3').length;

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Search Intelligence Dashboard - Ramzi Rahiman</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #f8f9fa;
            color: #1a1a1a;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0;
        }
        
        header {
            background: #ffffff;
            border-bottom: 1px solid #e0e0e0;
            padding: 2.5rem 2rem;
            margin-bottom: 2rem;
        }
        
        header h1 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #0a0a0a;
        }
        
        header p {
            font-size: 13px;
            color: #666;
            margin: 0;
        }

        .update-badge {
            display: inline-block;
            background: #e6f2ff;
            color: #0066cc;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            margin-top: 1rem;
        }
        
        .section {
            background: #ffffff;
            margin-bottom: 2rem;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
        }
        
        .section-header {
            padding: 1.5rem 2rem;
            border-bottom: 1px solid #e0e0e0;
            background: #fafbfc;
        }
        
        .section-header h2 {
            font-size: 16px;
            font-weight: 600;
            margin: 0;
            color: #0a0a0a;
        }
        
        .section-content {
            padding: 2rem;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 12px;
            margin-bottom: 2rem;
        }
        
        .metric-card {
            background: #f0f4f8;
            padding: 1.25rem;
            border-radius: 6px;
            border: 1px solid #dfe5eb;
        }
        
        .metric-label {
            font-size: 11px;
            color: #666;
            font-weight: 600;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .metric-value {
            font-size: 24px;
            font-weight: 600;
            color: #0a0a0a;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        
        thead {
            background: #f5f7fa;
            border-bottom: 1px solid #dfe5eb;
        }
        
        th {
            padding: 12px 14px;
            text-align: left;
            font-weight: 600;
            color: #666;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.4px;
        }
        
        td {
            padding: 12px 14px;
            border-bottom: 1px solid #e8ecf1;
            color: #333;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        tbody tr:hover {
            background: #f9fbfd;
        }
        
        .p1 { color: #0066cc; font-weight: 600; }
        .p2 { color: #ff9500; font-weight: 600; }
        .p3 { color: #999; font-weight: 600; }
        
        .opportunity-card {
            background: #f9fbfd;
            border: 1px solid #dfe5eb;
            border-radius: 6px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .opportunity-card h3 {
            font-size: 15px;
            font-weight: 600;
            margin: 0 0 0.25rem;
            color: #0a0a0a;
        }
        
        .opportunity-card .subtitle {
            font-size: 12px;
            color: #666;
            margin: 0 0 1.25rem;
        }
        
        .opp-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.25rem;
            margin-bottom: 1.5rem;
        }
        
        .opp-item {
            padding: 1rem;
            background: #ffffff;
            border: 1px solid #e8ecf1;
            border-radius: 4px;
        }
        
        .opp-item-label {
            font-size: 11px;
            color: #999;
            font-weight: 600;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        
        .opp-item-content {
            font-size: 13px;
            color: #333;
            line-height: 1.5;
        }
        
        .btn {
            display: inline-block;
            padding: 8px 14px;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid #dfe5eb;
            background: #ffffff;
            color: #0a0a0a;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            margin-top: 1rem;
            margin-right: 8px;
            transition: all 0.2s;
        }
        
        .btn:hover {
            background: #f5f7fa;
            border-color: #bbc5d1;
        }
        
        .btn-primary {
            background: #0066cc;
            color: #ffffff;
            border-color: #0052a3;
        }
        
        .btn-primary:hover {
            background: #0052a3;
        }

        a {
            color: #0066cc;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .footer {
            padding: 2rem;
            text-align: center;
            color: #999;
            font-size: 12px;
            border-top: 1px solid #e0e0e0;
        }

        .alert-box {
            background: #e6f2ff;
            border: 1px solid #b3d9ff;
            border-left: 4px solid #0066cc;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1.5rem;
            font-size: 13px;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <header>
            <h1>Job Search Intelligence Dashboard</h1>
            <p>Asia/Riyadh (Updated Daily at 8:00 PM) · Ramzi Rahiman | Operations & Maintenance Engineering</p>
            <div class="update-badge">✓ Auto-Updated Daily • Last Refresh: ${dateStr}</div>
        </header>

        <!-- ALERT -->
        <div class="section" style="margin-bottom: 1.5rem;">
            <div class="section-content">
                <div class="alert-box">
                    <strong>🤖 This dashboard updates automatically every day at 8:00 PM Riyadh time!</strong><br>
                    Just visit this link whenever you want to see the latest opportunities. No manual updates needed.
                </div>
            </div>
        </div>

        <!-- EXECUTIVE SNAPSHOT -->
        <div class="section">
            <div class="section-header">
                <h2>Executive Snapshot</h2>
            </div>
            <div class="section-content">
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-label">Total Opportunities</div>
                        <div class="metric-value">${opportunities.length}</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-label">P1 (Apply Now)</div>
                        <div class="metric-value" style="color: #0066cc;">${p1Count}</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-label">P2 (Tailor)</div>
                        <div class="metric-value" style="color: #ff9500;">${p2Count}</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-label">P3 (Monitor)</div>
                        <div class="metric-value" style="color: #999;">${p3Count}</div>
                    </div>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td style="font-weight: 600; width: 30%;">🎯 Top Priority</td>
                            <td>Saudi Aramco – Maintenance Engineering Specialist (8/10 fit)</td>
                            <td style="text-align: right; color: #0066cc; font-weight: 600;">APPLY NOW</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600;">⭐ Highest Shortlist</td>
                            <td>SABIC – Plant Operations Manager (55–70%)</td>
                            <td style="text-align: right;">Use referral</td>
                        </tr>
                        <tr>
                            <td style="font-weight: 600;">💼 Best Fit Score</td>
                            <td>Aramco – Maintenance Engineering (your exact background)</td>
                            <td style="text-align: right; color: #0066cc; font-weight: 600;">8/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- MASTER DASHBOARD TABLE -->
        <div class="section">
            <div class="section-header">
                <h2>Master Opportunity Dashboard</h2>
            </div>
            <div class="section-content">
                <table>
                    <thead>
                        <tr>
                            <th>P</th>
                            <th>Track</th>
                            <th>Role</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Fit</th>
                            <th>Salary</th>
                            <th>Link</th>
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
                        <td><a href="${opp.directLink}" target="_blank">Visit ↗</a></td>
                    </tr>
`;
  });

  html += `                    </tbody>
                </table>
            </div>
        </div>

        <!-- TRACK 1: REALISTIC -->
        <div class="section">
            <div class="section-header">
                <h2>Track 1: Realistic (5 roles)</h2>
            </div>
            <div class="section-content">
`;

  opportunities.filter(o => o.track === 'Realistic').forEach(opp => {
    const pColor = opp.priority === 'P1' ? '#0066cc' : opp.priority === 'P2' ? '#ff9500' : '#999';
    html += `<div class="opportunity-card">
                    <h3>${opp.role}</h3>
                    <p class="subtitle">${opp.company} · ${opp.location}</p>
                    <div class="opp-grid">
                        <div class="opp-item">
                            <div class="opp-item-label">Priority & Fit</div>
                            <div class="opp-item-content"><strong style="color: ${pColor}">${opp.priority}</strong> · <strong>${opp.fit}/10 fit</strong><br><em>${opp.shortlist}</em></div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Signal</div>
                            <div class="opp-item-content">${opp.signal}</div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Why it fits</div>
                            <div class="opp-item-content">${opp.whyFits}</div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Watch-outs</div>
                            <div class="opp-item-content">${opp.watchOuts}</div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">CV Angle</div>
                            <div class="opp-item-content">${opp.cvAngle}</div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Salary & Basis</div>
                            <div class="opp-item-content"><strong>${opp.salary}</strong><br><em>${opp.basis}</em></div>
                        </div>
                    </div>
                    <a href="${opp.directLink}" target="_blank" class="btn btn-primary">View Job Posting ↗</a>
                </div>
`;
  });

  html += `            </div>
        </div>

        <!-- TRACK 2: ASPIRATIONAL -->
        <div class="section">
            <div class="section-header">
                <h2>Track 2: Aspirational (3 roles)</h2>
            </div>
            <div class="section-content">
`;

  opportunities.filter(o => o.track === 'Aspirational').forEach(opp => {
    const pColor = opp.priority === 'P1' ? '#0066cc' : opp.priority === 'P2' ? '#ff9500' : '#999';
    html += `<div class="opportunity-card">
                    <h3>${opp.role}</h3>
                    <p class="subtitle">${opp.company} · ${opp.location}</p>
                    <div class="opp-grid">
                        <div class="opp-item">
                            <div class="opp-item-label">Priority & Fit</div>
                            <div class="opp-item-content"><strong style="color: ${pColor}">${opp.priority}</strong> · <strong>${opp.fit}/10 fit</strong></div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Signal</div>
                            <div class="opp-item-content">${opp.signal}</div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Why it fits</div>
                            <div class="opp-item-content">${opp.whyFits}</div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">CV Angle</div>
                            <div class="opp-item-content">${opp.cvAngle}</div>
                        </div>
                    </div>
                    <a href="${opp.directLink}" target="_blank" class="btn btn-primary">View Job Posting ↗</a>
                </div>
`;
  });

  html += `            </div>
        </div>

        <!-- TRACK 3: PIVOT -->
        <div class="section">
            <div class="section-header">
                <h2>Track 3: Pivot (3 roles)</h2>
            </div>
            <div class="section-content">
`;

  opportunities.filter(o => o.track === 'Pivot').forEach(opp => {
    const pColor = opp.priority === 'P1' ? '#0066cc' : opp.priority === 'P2' ? '#ff9500' : '#999';
    html += `<div class="opportunity-card">
                    <h3>${opp.role}</h3>
                    <p class="subtitle">${opp.company} · ${opp.location}</p>
                    <div class="opp-grid">
                        <div class="opp-item">
                            <div class="opp-item-label">Priority & Fit</div>
                            <div class="opp-item-content"><strong style="color: ${pColor}">${opp.priority}</strong> · <strong>${opp.fit}/10 fit</strong></div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Signal</div>
                            <div class="opp-item-content">${opp.signal}</div>
                        </div>
                        <div class="opp-item">
                            <div class="opp-item-label">Why it fits</div>
                            <div class="opp-item-content">${opp.whyFits}</div>
                        </div>
                    </div>
                    <a href="${opp.directLink}" target="_blank" class="btn btn-primary">View Job Posting ↗</a>
                </div>
`;
  });

  html += `            </div>
        </div>

        <!-- FOOTER -->
        <div class="footer">
            <p>🤖 This dashboard is automatically updated every day at 8:00 PM Asia/Riyadh time</p>
            <p>Last updated: ${dateStr}</p>
            <p style="margin-top: 1rem; font-size: 11px;">Auto-generated by GitHub Actions Robot</p>
        </div>
    </div>
</body>
</html>`;

  return html;
}

// Main execution
console.log('📊 Generating dashboard...');
const dashboard = generateDashboard();
const filename = `Job_Search_Dashboard_Updated_${new Date().toISOString().split('T')[0]}.html`;

try {
  fs.writeFileSync(filename, dashboard);
  console.log(`✅ Dashboard generated successfully: ${filename}`);
  console.log(`📝 File size: ${fs.statSync(filename).size} bytes`);
  process.exit(0);
} catch (error) {
  console.error('❌ Error writing file:', error);
  process.exit(1);
}
