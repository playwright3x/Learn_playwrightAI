import { test, expect } from "@playwright/test";


test("Verify Flipkart Search Results", async ({ page }) => {

    await page.goto("https://www.flipkart.com");

    // Search for DSLR Camera
    await page
        .getByPlaceholder("Search for products, brands and more").first()
        .fill("DSLR Camera");

    await page.keyboard.press("Enter");

    // Wait until URL changes to search page
    await page.waitForURL(/search/);


    let allTitles: string[] = [];
    let pageNumber = 1;


    while (true) {

        console.log(`Fetching Page: ${pageNumber}`);


        // Wait for product title elements
        await page.locator(".RG5Slk").first().waitFor({
            state: "visible",
            timeout: 15000
        });


        // Extract titles
        const titles = await page
            .locator(".RG5Slk")
            .evaluateAll(elements =>
                elements.map(e => e.textContent?.trim() || "")
            );


        allTitles.push(...titles);


        const nextButton = page.getByText("Next", {
            exact: true
        });


        if (await nextButton.isVisible()) {

            await nextButton.click();


            // Wait for next page content
            await page.locator(".RG5Slk").first().waitFor({
                state: "visible"
            });


            pageNumber++;

        } else {

            break;
        }
    }


    console.log("==========================");
    console.log("Total Titles:", allTitles.length);
    console.log("==========================");


    allTitles.forEach((title, index) => {
        console.log(`${index + 1}. ${title}`);
    });


    await page.pause();
});

test('Validate the form ', async ({ page }) => {

    // Personal information 
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page")
    await page.locator("#first-name").fill("Arnav");
    await page.locator("#last-name").fill("sharma");
    await page.locator(".control-chip input").first().click()

    // Professional details

    await page.locator("#years-experience").selectOption("5");
    await page.locator("#profile-date").fill("2026-02-14");
    await page.locator(".control-chip input").last().click();
    let checkboxes =  page.locator("//label[text()='Automation tools']//parent::div//input");
    const checkbox = await checkboxes.count();
    for(let i=0;i<checkbox;i++)
    {
         await checkboxes.nth(i).click();
    }

    await page.locator("//label[text()='Continents you have worked from']//parent::div//input").first().click();

      //selenium command 
     await page.locator("//button[@data-testid='tab-browser']").click();
     // upload 
    await page.locator("#upload-image").setInputFiles("Shashank_learning/tests/cricket_rules.pdf")
   

    page.pause()
});