
import { test, expect } from '@playwright/test';

test('Handle Nested Frames', async ({ page }) => {

    // Navigate to the application
    await page.goto('https://selectorshub.com/iframe-scenario/');

    // Wait for all iframes to load
    await page.waitForLoadState('domcontentloaded');

    // Print total number of frames (for debugging)
    console.log("Total Frames:", page.frames().length);

    // ============================
    // Outer Frame
    // ============================
    const outerFrame = page.frameLocator('iframe').nth(0);

    await outerFrame.locator('#inp_val').fill('Shashank');

    // ============================
    // First Nested Frame
    // ============================
    const firstNestedFrame = outerFrame.frameLocator('iframe').nth(0);

    await firstNestedFrame
        .getByPlaceholder('Current Crush Name')
        .fill('Playwright');

    // ============================
    // Second Nested Frame
    // ============================
    const secondNestedFrame = firstNestedFrame.frameLocator('iframe').nth(0);

    await secondNestedFrame
        .getByPlaceholder('Destiny')
        .fill('Automation Testing');

    // Pause for inspection
    await page.pause();
});