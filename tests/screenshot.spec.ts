import { test, expect } from '@playwright/test';

test.describe('Poster Screenshot Tests', () => {
  test('should match snapshot', async ({ page }) => {
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    // Take a screenshot and compare to snapshot
    await expect(page).toHaveScreenshot('poster-page.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('should match print media snapshot', async ({ page }) => {
    // Emulate print media
    await page.emulateMedia({ media: 'print' });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take screenshot with print styles applied
    await expect(page).toHaveScreenshot('poster-print.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});
