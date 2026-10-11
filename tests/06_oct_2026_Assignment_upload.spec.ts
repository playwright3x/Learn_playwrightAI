import { test, expect, Locator } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const upload_dir = path.join(__dirname, '../upload/image.jpeg');
test("Login to Testing Academy", async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  await page.getByPlaceholder("Email").fill(process.env.USERNAME!);
  await page.getByRole("button", { name:"Continue", exact: true }).first().click();
  await page.getByPlaceholder("Password").fill(process.env.PASSWORD!);
  await page.getByRole("button", { name:"Continue", exact: true }).first().click();
  await page.getByRole("link" ,{name:"Settings"}).click();

  await page.locator("#avatar-upload").setInputFiles(upload_dir);

 

});