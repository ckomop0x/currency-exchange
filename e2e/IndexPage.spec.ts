import { test, expect } from '@playwright/test';

// test('Main page title', async ({ page }) => {
//   await page.goto('/');
//
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/F1 Standings/);
// });

test('To have proper h1', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  // Use page.locator to find the h1 element by its text.
  const h1Element = await page.locator('h1');

  // Get the text value from the h1 element.
  const textValue = await h1Element.innerText();

  // Check if the element exists and assert it.
  // await expect(h1Element).toExist();
  await expect(textValue).toBe('Currency Exchange App');
});
