import { test, expect } from "@playwright/test";

test("Validate the form submission JSON", async ({ page }) => {

    // Open application
    await page.goto(
        "https://app.thetestingacademy.com/playwright/tables/practice#page"
    );
    await page.locator("#first-name").fill("Arnav");
    await page.locator("#last-name").fill("sharma");
    // Gender - Male
    await page.locator(".control-chip input").first().check();
    await page.locator("#years-experience").selectOption("5");
    await page.locator("#profile-date").fill("2026-02-14");
    await page.locator(".control-chip input").last().check();
    const checkboxes = page.locator("//label[text()='Automation tools']//parent::div//input");
    const checkboxCount = await checkboxes.count();
    for (let i = 0; i < checkboxCount; i++) {
        await checkboxes.nth(i).check();
    }
    await page.locator("#upload-image").setInputFiles("Shashank_learning/tests/cricket_rules.pdf");
    await page.locator("#profile-submit").click();
    await expect(
        page.locator("#submission-output")
    ).toBeVisible();
    const jsonText = await page.locator("#submission-output")
        .innerText();
    console.log(jsonText);
    const json = JSON.parse(jsonText);
    // Validate fields

    expect(json.firstName)
        .toBe("Arnav");

    expect(json.lastName)
        .toBe("sharma");

    expect(json.gender)
        .toBe("Male");

    expect(json.yearsExperience)
        .toBe("5");

    expect(json.date)
        .toBe("2026-02-14");
    // Validate checkbox array
    expect(json.tools)
        .toContain("UFT");

    expect(json.tools)
        .toContain("Protractor");

    expect(json.tools)
        .toContain("Selenium Webdriver");
    // Validate continent

    expect(json.continents)
        .toBe("Antarctica");
    await page.pause();

});

