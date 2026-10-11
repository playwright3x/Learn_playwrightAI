
import { test, expect } from '@playwright/test';
test("Login to Testing Academy", async ({ page }) => {
await page.goto("https://selectorshub.com/xpath-practice-page/");
const card = page.locator(".jackPart");
await card.locator("#kils").fill("shashank");
await card.locator("#pizza").fill("Margherita Pizza");
await page.keyboard.press("Tab");
await page.keyboard.type("playwright")

await page.keyboard.press("Tab");
await page.keyboard.press("Tab");
await page.keyboard.type("admin@123");
await page.pause();
});