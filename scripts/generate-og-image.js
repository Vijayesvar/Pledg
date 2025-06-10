import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const publicDir = path.join(__dirname, '../public');
    const outputPath = path.join(publicDir, 'og-image.jpg');
    
    // Create public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    
    // Use the local HTML file
    const htmlPath = path.join(publicDir, 'og-image.html');
    const fileUrl = `file://${htmlPath}`;
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Take a screenshot of the page
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
      fullPage: false
    });
    
    console.log(`OG image generated at: ${outputPath}`);
    
    await browser.close();
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
})();
