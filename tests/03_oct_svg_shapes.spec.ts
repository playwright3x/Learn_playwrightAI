import {expect, Locator, test} from "@playwright/test";

test.describe('SVG test', () => {

    const url = "https://app.thetestingacademy.com/playwright/widgets/svg";

    test.beforeEach(async ({ page }) => {
        console.log("Before each test");
        await page.goto(url);
    });

    test('Locate SVG shapes', async ({page}) => {

    //     const circle :Locator = page.locator("#circle-blue")
    //     await circle.click();

    //     const output = await page.locator("#shapes-output").innerText();
    //    expect(output).toContain("Blue circle");


       const allQuarters =  page.locator("rect.bar");
       const count = await allQuarters.count();
       for(let i=0;i<count;i++)
      {
            const quarterText = await allQuarters.nth(i).getAttribute("data-quarter");
            console.log("Quarter is : "+quarterText);
             await allQuarters.nth(i).click();
       }

       

        await page.pause();

    })
});