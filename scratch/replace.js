const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const filePath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(filePath, 'utf8');

const replacements = [
  { brand: 'HubSpot', name: 'siHubspot' },
  { brand: 'Zendesk', name: 'siZendesk' },
  { brand: 'Salesforce', name: 'siSalesforce' },
  { brand: 'Stripe', name: 'siStripe' },
  { brand: 'Slack', name: 'siSlack' },
  { brand: 'WooCommerce', name: 'siWoocommerce' },
  { brand: 'Notion', name: 'siNotion' },
  { brand: 'BigCommerce', name: 'siBigcommerce' },
  { brand: 'Calendly', name: 'siCalendly' }
];

replacements.forEach(({ brand, name }) => {
  const icon = simpleIcons[name];
  if (!icon) {
    console.error(`Icon for ${brand} not found!`);
    return;
  }
  
  const regex = new RegExp(`(<span class="logo-pill"[^>]*>).*?(<span>${brand}</span></span>)`, 'g');
  html = html.replace(regex, (match, p1, p2) => {
    return `${p1}<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="${icon.path}"/></svg>${p2}`;
  });
});

fs.writeFileSync(filePath, html, 'utf8');
console.log('Replaced icons successfully in index.html');
