

import { test, expect, Locator } from '@playwright/test';

test.describe('File download Demo - TestingAcademy', async () => {
    });


    test.beforeEach(async ({ page }) => {
        await page.goto("https://demoqa.com/upload-download");
        await page .goto("https://parabank-pro.onrender.com/lab/download")

    });

    test('demo: Download setInputFiles', async ({ page }) => {

        const [downlaoad] = await Promise.all([

            page.waitForEvent('download'),
            page.locator('#downloadButton').click()

        ]);
             await downlaoad.saveAs('./out/'+downlaoad.suggestedFilename());
    });

    test("download file Parabank", async ({ page }) => {
    await page.locator("#username").fill("john");
    await page.locator("#password").fill("Demo@123");
    await page.locator("[data-testid='login-submit']").click();

    const [AccountStatement] = await Promise.all([

        page.waitForEvent('download'),
        page.getByRole("link",{name:"Download Account Statement"}).click()
    ]);

   await AccountStatement.saveAs('./statements/'+AccountStatement.suggestedFilename());
   await page.pause();

});

   test 
       

