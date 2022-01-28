import { test, expect } from '@playwright/test';

test('Todos test in only page', async ({ page }) => {

  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  // Go to http://localhost:4200/todo
  await page.goto('http://localhost:4200/todo');

  // Click input
  await page.click('input');

  // Fill [placeholder="Search"]
  await page.fill('[placeholder="Search"]', 'angular');

  // Click text=angulartypicodeThis card indeterminates progress bar.The Shiba Inu is the smalle
  await page.click('text=angulartypicodeThis card indeterminates progress bar.The Shiba Inu is the smalle');

  // Click text=angular
  await page.click('text=angular');

  // Click text=This card indeterminates progress bar.The Shiba Inu is the smallest of the six o
  await page.click('text=This card indeterminates progress bar.The Shiba Inu is the smallest of the six o');

  // Click mat-expansion-panel-header[role="button"]:has-text("Comments")
  await page.click('mat-expansion-panel-header[role="button"]:has-text("Comments")');

  // Click mat-expansion-panel-header[role="button"]:has-text("Comments")
  await page.click('mat-expansion-panel-header[role="button"]:has-text("Comments")');

  // Click mat-card-subtitle:has-text("typicode")
  await page.click('mat-card-subtitle:has-text("typicode")');

  // Click li:has-text("»")
  await page.click('li:has-text("»")');

  // Click li:has-text("«")
  await page.click('li:has-text("«")');

  // Click [placeholder="Search"]
  await page.click('[placeholder="Search"]');

  // Fill [placeholder="Search"]
  await page.fill('[placeholder="Search"]', '');

  // Click text=Searchsearch« 1 (current) 2 »json-servertypicodeThis card indeterminates progres
  await page.click('text=Searchsearch« 1 (current) 2 »json-servertypicodeThis card indeterminates progres');

  // Click mat-expansion-panel-header[role="button"]:has-text("Comments")
  await page.click('mat-expansion-panel-header[role="button"]:has-text("Comments")');

  // Click mat-expansion-panel-header[role="button"]:has-text("Comments")
  await page.click('mat-expansion-panel-header[role="button"]:has-text("Comments")');

  // Click text=angulartypicodeThis card indeterminates progress bar.The Shiba Inu is the smalle >> mat-expansion-panel-header[role="button"]
  await page.click('text=angulartypicodeThis card indeterminates progress bar.The Shiba Inu is the smalle >> mat-expansion-panel-header[role="button"]');

  // Click text=angulartypicodeThis card indeterminates progress bar.The Shiba Inu is the smalle >> mat-expansion-panel-header[role="button"]
  await page.click('text=angulartypicodeThis card indeterminates progress bar.The Shiba Inu is the smalle >> mat-expansion-panel-header[role="button"]');

  // Click text=typicode
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:4200/todo/detail/1' }*/),
    page.click('text=typicode')
  ]);

  // Click div:has-text("AuthortypicodeSome quick example text to build on the card title and make up the")
  await page.click('div:has-text("AuthortypicodeSome quick example text to build on the card title and make up the")');

  // Click button:has-text("arrow_back Back")
  await page.click('button:has-text("arrow_back Back")');
  await expect(page).toHaveURL('http://localhost:4200/todo');

  // Click [aria-label="Next"]
  await page.click('[aria-label="Next"]');

  // Click text=«
  await page.click('text=«');

});
