const { test, expect } = require('@playwright/test');

test('Скриншот усієї сторінки', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('index-page.png');
});

test('Скриншот заголовка h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveScreenshot('index-page-h1.png');
});
