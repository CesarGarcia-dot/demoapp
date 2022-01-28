import { test, expect } from '@playwright/test';


test("List users charge", async ({ page }) => {
  await page.goto('http://localhost:4200/users');
  await expect(page).toHaveURL('/users');
  await page.locator('mat-paginator');
  // await expect(paginator.count());
})
