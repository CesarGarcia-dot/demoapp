import { test, expect } from '@playwright/test';

test('Jokes tests in all components only navigation on elements', async ({ page }) => {

  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  // Go to http://localhost:4200/todo
  await page.goto('http://localhost:4200/todo');

  // Click button:has-text("3 Jokes")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:4200/jokes' }*/),
    page.click('button:has-text("3 Jokes")')
  ]);

  // Click text=There's new data available. Click to reload the data.cached UPDATE cached FETCH
  await page.click('text=There\'s new data available. Click to reload the data.cached UPDATE cached FETCH ');

  // Click button:has-text("cached UPDATE")
  await page.click('button:has-text("cached UPDATE")');

  // Click button:has-text("cached FETCH NEW JOKES")
  await page.click('button:has-text("cached FETCH NEW JOKES")');

  // Click button:has-text("favorite")
  await page.click('button:has-text("favorite")');

  // Click button:has-text("cached UPDATE")
  await page.click('button:has-text("cached UPDATE")');

});
