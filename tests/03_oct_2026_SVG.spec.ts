import {expect, Locator, test} from "@playwright/test";

test.describe('SVG test', () => {

    const url = "https://www.flipkart.com/";

    test.beforeEach(async ({ page }) => {
        console.log("Before each test");
        await page.goto(url);
    });

    test('verify SVG test', async ({page}) => {

        // Flipkart renders two inputs with this placeholder; the second is readonly, so use the editable textbox
        const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands and More' });
        await searchBox.fill("macmini");
        await page.locator(".b3wTlE").click();
        await expect(searchBox).toHaveValue("macmini");

        // Search button is an SVG icon inside the form's submit button
        await page.locator("form button[type='submit'] svg").click();
        await expect(page).toHaveURL(/search\?q=macmini/);

        const titleresults :Locator = page.locator("//div[contains(@data-id,'MP') or contains(@data-id,'CPU') or contains(@data-id,'ACC')]//parent::div//a[2]");
        await expect(titleresults.first()).toBeVisible();
        const count = await titleresults.count();
        for(let i=0;i<count;i++){
            const title = await titleresults.nth(i).textContent();
            console.log(title);
        }
    });

});
