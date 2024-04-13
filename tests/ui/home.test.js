const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('https://stilian-matev-regular-exam.onrender.com/');
    const heading = await page.$('Title');
    const text = await heading.textContent();
    expect(text).toContain('Cookbook');  
  });
  