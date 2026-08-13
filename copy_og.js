const fs = require('fs');
const path = require('path');

const src = 'C:/Users/Rafael Alexandre/.gemini/antigravity/brain/7d220fea-55c3-4020-96d9-4fd55813171b/og_logo_pr_1786646901833.jpg';
const dest = path.join(__dirname, 'assets', 'og-logo.jpg');

fs.copyFileSync(src, dest);
console.log('Successfully copied OG image to', dest);
