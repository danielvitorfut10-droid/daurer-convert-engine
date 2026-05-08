import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const APP_URL = 'http://localhost:8080';
const OUTPUT_DIR = 'temp_audit';
const SCREENSHOTS_DIR = path.join(OUTPUT_DIR, 'screenshots');

async function runAnalysis() {
    if (!fs.existsSync(SCREENSHOTS_DIR)) {
        fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
    }

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const logs = [];
    page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
    page.on('pageerror', err => logs.push(`[ERROR] ${err.message}`));

    console.log(`Navigating to ${APP_URL}...`);
    try {
        await page.goto(APP_URL, { waitUntil: 'networkidle' });
    } catch (e) {
        console.error(`Failed to navigate: ${e.message}`);
        await browser.close();
        return;
    }

    const viewports = [
        { name: 'desktop', width: 1920, height: 1080 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'mobile', width: 375, height: 667 }
    ];

    for (const vp of viewports) {
        console.log(`Capturing ${vp.name} screenshot...`);
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.waitForTimeout(1000);
        await page.screenshot({ path: path.join(SCREENSHOTS_DIR, `${vp.name}.png`), fullPage: true });
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, 'audit_logs.txt'), logs.join('\n'));

    console.log('Performing element audit...');
    const images = await page.locator('img').all();
    const missingAlt = [];
    for (const img of images) {
        const alt = await img.getAttribute('alt');
        const src = await img.getAttribute('src');
        if (!alt || alt.trim() === '') {
            missingAlt.push(src || 'unknown source');
        }
    }

    const report = `Images missing alt text: ${missingAlt.length}\n${missingAlt.map(src => `- ${src}`).join('\n')}`;
    fs.writeFileSync(path.join(OUTPUT_DIR, 'element_audit.txt'), report);

    console.log('Analysis complete.');
    await browser.close();
}

runAnalysis().catch(err => {
    console.error('Audit failed:', err);
    process.exit(1);
});
