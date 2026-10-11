import { test, expect } from '@playwright/test';
import { spentEarned } from '../utils/transactionsUtils';
test('Automate Applitools App', async ({ page }) => {

    await page.goto("https://demo.applitools.com/");


    await page.locator("#username").fill("Admin");
    await page.locator("#password").fill("Password@123");

    await page.getByRole("link", { name: "Sign in" }).click();

    expect(page).toHaveURL(/app\.html/);

   // Get transaction amounts
    const amounts = await page.locator("//table//tr/td[5]").allTextContents();

   const result = spentEarned(amounts);

console.log("Total Spend: ", result.spend);
console.log("Total Earned Amount: ", result.earnedAmmount);

const total = result.earnedAmmount - result.spend;

console.log("Net Total:", total);

expect(total).toBeCloseTo(1996.22, 2);
});


   

