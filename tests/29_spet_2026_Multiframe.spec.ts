import {test, expect, Locator} from '@playwright/test';

test('verify the negative test case for app testingacedmy',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    const allframes : Locator[] = await  page.locator("frame").all();
    console.log("allframes"+allframes.length);
    page.pause();
});