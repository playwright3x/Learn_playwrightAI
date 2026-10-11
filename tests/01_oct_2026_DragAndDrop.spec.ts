
import { test, expect, Locator } from '@playwright/test';

test('Verify Drag and Drop in Kanban', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

    // Source card
    const source: Locator = page.locator("#card-write-spec");
    await expect(source).toBeVisible();

    const sBox = await source.boundingBox();
    if (!sBox) throw new Error("Source element not found");

    // Target column
    const target: Locator = page.locator('[data-status="in-progress"]');
    await expect(target).toBeVisible();

    const tBox = await target.boundingBox();
    if (!tBox) throw new Error("Target element not found");

    // Drag and Drop
    await page.mouse.move(
        sBox.x + sBox.width / 2,
        sBox.y + sBox.height / 2
    );

    await page.mouse.down();

    await page.mouse.move(
        tBox.x + tBox.width / 2,
        tBox.y + tBox.height / 2,
        { steps: 10 }
    );

    await page.mouse.up();

    await page.pause();
});