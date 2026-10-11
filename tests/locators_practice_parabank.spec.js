import { expect, test } from '@playwright/test';

let username;
let password;

test('Registration form', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com');

    await page.locator("//a[text()='Register']").click();

    await page.locator('input[name="customer.firstName"]').fill('user001');

    await page.locator('input[name="customer.lastName"]').fill('user123');

    await page.locator('input[name="customer.address.street"]').fill('Koramangala');

    await page.locator('input[name="customer.address.city"]').fill('Bengaluru');

    await page.locator('input[name="customer.ssn"]').fill('123-45-6789');

    await page.locator('input[name="customer.address.state"]').fill('Karnataka');
    
    await page.locator('input[name="customer.address.zipCode"]').fill('560034');
   


    username = page.locator('input[name="customer.username"]');

    password = page.locator('input[name="customer.password"]');


    await username.fill('admin123');

    await password.fill('user123');


    await page.locator('#repeatedPassword').fill('user123');


    await page.locator("//input[@value='Register']").click();

    let WelComeText = await page.locator("//h1[text()='Welcome']").innerText();

    expect(WelComeText).toContain(username);

    await page.pause();

});


test.only('Login to Application', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com');

    await page.locator('input[name="username"]').fill("admin123");

    await page.locator('input[name="password"]').fill("user123");

    await page.locator('input[type="submit"]').click();

    await page.pause();

});