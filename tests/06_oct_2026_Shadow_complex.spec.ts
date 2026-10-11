import { test, expect } from '@playwright/test';
import path from 'path';

const upload_dir = path.join(__dirname,"..//upload/image.jpeg");
test("Login to Testing Academy", async ({ page }) => {

    await page.goto("file:///Users/shashank/Downloads/Shadow%20DOM%20Practice.html");

    const formCard = page.locator("#signup");

    await page.getByLabel("Full name").fill("Shashank Pandit");
    await page.getByLabel("Email").fill("test@example.com");
    await page.keyboard.press("Tab");
    await page.keyboard.type("kartik@1232345");
    await page.getByRole("combobox",{name:"role"}).selectOption("Developer");
    await page.getByRole("checkbox",{name :" I agree to the terms"}).click();
    await page.getByRole("button",{name :" Create account"}).click();

   

    // file Manager 

    const fileMangaer =  page.locator("#fm");
    await fileMangaer
    .locator('input[type="file"]')
    .setInputFiles(upload_dir);
     await page.pause();

    // Download report
const [file] = await Promise.all([
    page.waitForEvent('download'),
    fileMangaer
        .getByRole('button', { name: 'Download report (.txt)' })
        .click()
]);
      await file.saveAs('./out/'+file.suggestedFilename());
      await page.pause();



});