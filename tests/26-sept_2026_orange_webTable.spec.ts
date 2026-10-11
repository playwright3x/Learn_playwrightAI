import { test, expect } from "@playwright/test";

test("Login to Orange App", async ({ page }) => {

    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Login
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

    // Navigate to PIM
    await page.locator(".oxd-sidepanel-body span")
        .filter({ hasText: "PIM" })
        .click();

    await page.getByRole("link", { name: "Employee List" }).click();

    // Search Employee
    const name = "shashankk pandit";

    await page
        .locator(".oxd-autocomplete-wrapper")
        .first()
        .locator("input")
        .fill(name);

    // Search
    await page.getByRole("button", { name: "Search" }).click();

    // Find employee row
    const employeeRow = page
        .locator(".oxd-table-row")
        .filter({ hasText: "shashankk" })
        .filter({ hasText: "pandit" });

   
    // Click Delete button inside that employee row
    await employeeRow
        .locator(".oxd-icon.bi-trash")
        .click();

        // Confirm
await page.getByRole("button", { name: "Yes, Delete" }).click();

// Verify success message
await expect(
    page.getByText("Successfully Deleted")
).toBeVisible();

        page.pause();

        page.waitForTimeout(5000)
});