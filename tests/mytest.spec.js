import { test, expect } from "@playwright/test";

test("my test", async ({page}) => {
  
await page.goto("https://google.com");
await page.locator ('input[name="q"]').fill("Playwright");
await page.keyboard.press("Enter");
await page.waitForTimeout(2000);
await expect(page).toHaveTitle(/Playwright/);
const result = await page.locator('h3').first().textContent();
console.log(result);

});