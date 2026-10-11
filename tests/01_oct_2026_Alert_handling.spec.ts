import { test, expect } from '@playwright/test';

test('Automate Applitools App', async ({ page }) => {

    await page.goto("https://parabank-pro.onrender.com/lab/dialogs");
    await page.locator("#username").fill("john");
    await page.locator("#password").fill("Demo@123");
    await page.locator("[data-testid='login-submit']").click();

    page.on('dialog',async dailog => {
    console.log("Alert message is: ", dailog.message());
    dailog.accept();
    });
    await page.getByRole("button",{name:"Simple Alert"}).click();
     await page.getByRole("button",{name:"Transaction Alert"}).click();
     await page.getByRole("button",{name:"Security Alert"}).click();
    
    await page.pause();


});