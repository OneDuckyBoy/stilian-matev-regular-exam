const { test, expect } = require('@playwright/test');

test('Check cookbook page', async ({ page }) => {
    await page.goto('https://stilian-matev-regular-exam.onrender.com/Cookbook');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  