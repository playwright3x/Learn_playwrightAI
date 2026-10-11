import { test, expect } from "@playwright/test";


test("Validate the form submission JSON", async ({ page }) => {
// Open the page
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    // Locate the iframe
    const frame = page.frameLocator("#frame-one");

    // Fill the form
    await frame.getByRole("textbox", { name: "Vehicle name" }).fill("Test Automation");
    await frame.getByRole("textbox", { name: "Registration number" }).fill("MH-AB-1234");

    // Select vehicle type
    await frame.locator('select[name="vehicleType"]').selectOption("Electric");

    await frame.getByRole("textbox", { name: "Owner name" }).fill("Arnav Sharma");
    await frame.locator("#RESULT_TextField-4").fill("2020");

    await frame.getByPlaceholder("Any notes about the registration").fill("Vehicle registered successfully.");

    await frame.locator("#vehicle-submit").click();

    const jsonTest = await frame.locator("#vehicle-output").innerText();
    console.log(jsonTest);
    const jsondata = JSON.parse(jsonTest);
    expect(jsondata.vehicleName).toBe("Test Automation");
    expect(jsondata.ownerName).toBe("Arnav Sharma");
    expect(jsondata.regNumber).toBe("MH-AB-1234");
    expect(jsondata.vehicleType).toBe("Electric");
    expect(jsondata.year).toBe("2020");
    expect(jsondata.notes).toBe("Vehicle registered successfully.")
    // Pause for debugging
    await page.pause();
});;