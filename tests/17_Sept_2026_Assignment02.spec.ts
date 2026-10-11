
import {test, expect} from '@playwright/test';

test('verify the negative test case for app testingacedmy',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
      
   
      await page.locator('#email').fill("test@123");
      await page.locator('#password').fill("test123");

      await page.locator("//input[@type='checkbox']").click();
      await page.locator("//button[@type='submit']").click();

   await expect(page).toHaveURL(page.url());

   await expect(page.locator("//button[@type='submit']")).toBeVisible();


});