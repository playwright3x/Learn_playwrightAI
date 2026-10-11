import {test ,expect} from '@playwright/test';

test('Verify the title of cura katalone App',async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#btn-make-appointment").click();
   
    // Extract the username and password from the input fields

    const username_text = await page.locator("//span[@id='demo_username_label']//following-sibling::input").inputValue();
    const password_text = await page.locator("//span[@id='demo_password_label']//following-sibling::input").inputValue();
 
    console.log("Username is : "+ username_text);
    console.log("Password is : "+ password_text);

    // Fill login details
    await page.locator("#txt-username").fill(username_text);
    await page.locator("#txt-password").fill(password_text);
    await page.locator("#btn-login").click();

    // Assertion to verify the message after login
    
    let VerifyMessage = page.locator("h2");

    await expect(VerifyMessage).toHaveText("Make Appointment");

 await page.pause();

});