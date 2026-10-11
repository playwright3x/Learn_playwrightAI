import{ test, expect } from 'playwright/test';

test('verify the webtable', async ({ page }) => {

    page.goto('https://app.thetestingacademy.com/playwright/webtable');
    
    let name = "Rohan Mehta"
    
let checkbox_input = page.locator(
  `//span//strong[text()='${name}']//ancestor::td//preceding-sibling::td//input`
);

await checkbox_input.click();

await page.pause();
});

