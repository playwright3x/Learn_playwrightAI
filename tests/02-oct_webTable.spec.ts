import { test, expect, Locator } from '@playwright/test';

test('Verify Benefinary webTable', async ({ page }) => {
    await page.goto("https://parabank-pro.onrender.com/beneficiaries");
    await page.locator("#username").fill("john");
    await page.locator("#password").fill("Demo@123");
    await page.locator("[data-testid='login-submit']").click();

   

    page.once('dialog',async dailog =>{

        console.log("Alert message is: ", dailog.message());
        dailog.accept();
    });
       await page.locator(
        "//tr[td[text()='WFBI0847622']]//button[text()='Delete']"
    ).click();

      await page.pause();

});