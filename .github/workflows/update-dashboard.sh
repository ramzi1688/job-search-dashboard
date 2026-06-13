#!/bin/bash

TODAY=$(date '+%A, %B %d, %Y')
DATE=$(date '+%Y-%m-%d')

cat > "Job_Search_Dashboard_Updated_${DATE}.html" << 'EOF'
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Job Search Dashboard</title>
<style>
* { margin: 0; padding: 0; }
body { font-family: system-ui, -apple-system, sans-serif; background: #f5f5f5; padding: 20px; }
.container { max-width: 1000px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
h1 { font-size: 28px; margin-bottom: 10px; color: #0a0a0a; }
.info { color: #666; font-size: 13px; margin-bottom: 20px; }
.badge { display: inline-block; background: #e3f2fd; color: #1976d2; padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; margin-bottom: 20px; }
table { width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 13px; }
th { background: #f5f5f5; padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #ddd; }
td { padding: 12px; border-bottom: 1px solid #eee; }
tr:hover { background: #fafafa; }
.p1 { color: #0066cc; font-weight: bold; }
.p2 { color: #ff9500; font-weight: bold; }
.p3 { color: #999; font-weight: bold; }
a { color: #0066cc; text-decoration: none; }
a:hover { text-decoration: underline; }
.footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; }
</style>
</head>
<body>
<div class="container">
<h1>Job Search Intelligence Dashboard</h1>
<div class="info">Ramzi Rahiman | Operations & Maintenance Engineering</div>
<div class="badge">✓ Auto-Updated Daily</div>

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
<tr>
<td><span class="p1">P1</span></td>
<td>Realistic</td>
<td><strong>Maintenance Engineering Specialist</strong></td>
<td>Saudi Aramco</td>
<td>Dhahran</td>
<td>8/10</td>
<td>SAR 180K–220K</td>
<td><a href="https://www.aramco.jobs/" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p2">P2</span></td>
<td>Realistic</td>
<td><strong>Plant Operations Manager</strong></td>
<td>SABIC</td>
<td>Jubail</td>
<td>7/10</td>
<td>SAR 200K–260K</td>
<td><a href="https://www.sabic.com/en/careers" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p2">P2</span></td>
<td>Realistic</td>
<td><strong>Maintenance Supervisor – Gas Turbines</strong></td>
<td>GE Power</td>
<td>Riyadh</td>
<td>6/10</td>
<td>SAR 160K–200K</td>
<td><a href="https://careers.ge.com/" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p2">P2</span></td>
<td>Realistic</td>
<td><strong>Maintenance Manager – Refinery</strong></td>
<td>Kuwait NPL</td>
<td>Kuwait City</td>
<td>7/10</td>
<td>KWD 2,500–3,200</td>
<td><a href="https://www.knpc.com/careers" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p1">P1</span></td>
<td>Aspirational</td>
<td><strong>Senior Operations Consultant</strong></td>
<td>Accenture</td>
<td>Dubai</td>
<td>6/10</td>
<td>AED 180K–240K</td>
<td><a href="https://www.accenture.com/ae-en/careers" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p2">P2</span></td>
<td>Aspirational</td>
<td><strong>Associate Principal – O&G</strong></td>
<td>McKinsey</td>
<td>Dubai</td>
<td>5/10</td>
<td>AED 220K–300K+</td>
<td><a href="https://careers.mckinsey.com/" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p2">P2</span></td>
<td>Aspirational</td>
<td><strong>Operations Director</strong></td>
<td>AECOM</td>
<td>Riyadh</td>
<td>7/10</td>
<td>SAR 240K–300K</td>
<td><a href="https://careers.aecom.com/" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p1">P1</span></td>
<td>Pivot</td>
<td><strong>Operations Lead</strong></td>
<td>PredAI (Startup)</td>
<td>Remote</td>
<td>7/10</td>
<td>USD 55K–75K + equity</td>
<td><a href="https://www.linkedin.com/jobs/search/?keywords=predictive%20maintenance" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p2">P2</span></td>
<td>Pivot</td>
<td><strong>Predictive Maintenance Lead</strong></td>
<td>Startups</td>
<td>Remote</td>
<td>6/10</td>
<td>USD 50K–70K + equity</td>
<td><a href="https://www.linkedin.com/jobs/search/?keywords=predictive%20maintenance" target="_blank">View ↗</a></td>
</tr>
<tr>
<td><span class="p3">P3</span></td>
<td>Pivot</td>
<td><strong>Asset Reliability Manager</strong></td>
<td>DP World</td>
<td>Dubai</td>
<td>6/10</td>
<td>AED 150K–200K</td>
<td><a href="https://careers.dpworld.com/" target="_blank">View ↗</a></td>
</tr>
</tbody>
</table>

<div class="footer">
<p>🤖 Dashboard auto-updates daily at 8:00 PM Riyadh time</p>
<p>Generated: TODAY_PLACEHOLDER</p>
</div>
</div>
</body>
</html>
EOF

# Replace placeholder with actual date
sed -i "s/TODAY_PLACEHOLDER/${TODAY}/" "Job_Search_Dashboard_Updated_${DATE}.html"

echo "✓ Dashboard created: Job_Search_Dashboard_Updated_${DATE}.html"
