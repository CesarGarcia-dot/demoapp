import { test, expect }from "@playwright/test";


test("Test title of Nav Bar in home application", async ({ page }) => {
  await page.goto('/');
  // await page.locator("span", { hasText: 'My App'}).click();
  await expect(page).toHaveTitle('Demoangular');
  await page.locator("button", { hasText: '1 Users' }).click();
  await expect(page).toHaveURL('/users');
})

test("Routing Home to Users", async ({ page }) => {
  await page.goto('/');
  await page.locator("button", { hasText: '1 Users' }).click();
  await expect(page).toHaveURL('/users');
})


test("Routing Home to Todo", async ({ page }) => {
  await page.goto('/');
  await page.locator("button", { hasText: '2 Posts' }).click();
  await expect(page).toHaveURL('/todo');
})


test("Routing Home to Jokes", async ({ page }) => {
  await page.goto('/');
  await page.locator("button", { hasText: '3 Jokes' }).click();
  await expect(page).toHaveURL('/jokes');
})


test("Routing Home to Hello Promises", async ({ page }) => {
  await page.goto('/');
  await page.locator("button", { hasText: 'Hello Promises' }).click();
  await expect(page).toHaveURL('/users/hello');
})
