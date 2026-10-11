import { test, expect } from '@playwright/test';

test('perform mouse over', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.locator("//div[@data-testid='nav-add-ons']").hover();
    await page.getByRole("menuitem", { name: "Wi-Fi" }).click();
    
    let output = await page.locator("#output").innerText();
    console.log("Output is : " + output);
    const jsonData = JSON.parse(output);
    expect(jsonData.clicked).toContain("Wi-Fi")

    page.pause();
});