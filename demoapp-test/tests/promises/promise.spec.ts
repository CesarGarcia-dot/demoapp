import { test, expect } from '@playwright/test';

test('Promises test all components', async ({ page }) => {

  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  // Go to http://localhost:4200/todo
  await page.goto('http://localhost:4200/todo');

  // Click button:has-text("Hello Promises")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:4200/users/hello' }*/),
    page.click('button:has-text("Hello Promises")')
  ]);

  // Click text=Posts#UIDTitleBody11sunt aut facere repellat provident occaecati excepturi optio
  // await page.click('text=Posts#UIDTitleBody11sunt aut facere repellat provident occaecati excepturi optio');

  // Click h2:has-text("Posts")
  await page.click('h2:has-text("Posts")');

  // Click th:has-text("#")
  await page.click('th:has-text("#")');

  // Click text=UID
  await page.click('text=UID');

  // Click text=Title
  await page.click('text=Title');

  // Click text=Body
  await page.click('text=Body');

  // Click text=Posts#UIDTitleBody11sunt aut facere repellat provident occaecati excepturi optio >> div
  await page.click('text=Posts#UIDTitleBody11sunt aut facere repellat provident occaecati excepturi optio >> div');

  // Click html
  await page.click('html');

  // Click text=My App 1 Users 2 Posts 3 Jokes Hello Promises
  await page.click('text=My App 1 Users 2 Posts 3 Jokes Hello Promises');

  // Click button:has-text("1 Users")
  await page.click('button:has-text("1 Users")');
  await expect(page).toHaveURL('http://localhost:4200/users');

});
