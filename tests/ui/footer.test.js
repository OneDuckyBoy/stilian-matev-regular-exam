const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto('https://stilian-matev-regular-exam.onrender.com/');  
    const footer = await page.$('footer');
    const text = await footer.textContent();
    expect(text).toContain('© 2024 - Software Engineering and DevOps regular exam');
  });
  