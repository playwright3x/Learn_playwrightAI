import { test, expect } from '@playwright/test';

test('Vehicle Management', async ({ page }) => {
    await page.goto("file:///Users/shashank/Downloads/Vehicle%20Management.html");
    await page.locator("#vehicleName").fill("fornz");
    await page.locator("#ownerName").fill("deepak Mishra");
    await page.locator("#regNumber").fill("UP15AB1243");
    await page.locator("#vehicleType").selectOption("Car");
    await page.locator("#year").fill("2025");
    await page.locator("#saveBtn").click();
  
    const json=  await page.locator("#jsonOutput").innerText();
    const jsonData = JSON.parse(json);

    expect(jsonData.vehicleName).toBe("fornz");
    expect(jsonData.regNumber).toBe("UP15AB1243");

    page.locator("//td[text()='UP15AB1243']//parent::tr//button[text()='Verify RC']").click();
     
    const rowcount = await page.locator("//table[@id='vTable']//tr").count();
   // Wait for table update (optional - based on application behavior)
    await page.waitForTimeout(2000);

    // Locate all RC status cells (7th column)
    const statuses = await page
        .locator("//table[@id='vTable']//tbody//tr//td[7]")
        .allInnerTexts();

    let verifiedCount = 0;

    // Print all RC statuses
    for (let i = 0; i < statuses.length; i++) {

        console.log(`Row ${i + 1} RC Status: ${statuses[i]}`);

        if (statuses[i].trim() === "Verified") {
            verifiedCount++;
        }
    }

    console.log("Total Verified RC Count: " + verifiedCount);

    await page.pause();
});