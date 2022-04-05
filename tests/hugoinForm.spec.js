const { test, expect } = require('@playwright/test');

test.describe('HuGOin Form Submission', () => {
    
    test('Form - SPA site - navigate from first page', async ({ page }) => {
        // Go to http://localhost:1313/APrettyHuGOinWebsite/?page=1
        await page.goto('http://localhost:1313/APrettyHuGOinWebsite/?page=1');
        // Check [aria-label="Forms"]
        await page.locator('[aria-label="Forms"]').check();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGOinWebsite/?page=8');
        // Click [placeholder="Type Something\, Will ya\?"]
        await page.locator('[placeholder="Type Something\\, Will ya\\?"]').click();
        // Fill [placeholder="Type Something\, Will ya\?"]
        await page.locator('[placeholder="Type Something\\, Will ya\\?"]').fill('aa');
        // Click input[name="number"]
        await page.locator('input[name="number"]').click();
        // Fill input[name="number"]
        await page.locator('input[name="number"]').fill('11');
        // Click input[name="date"]
        await page.locator('input[name="date"]').click();
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowRight
        await page.locator('input[name="date"]').press('ArrowRight');
        // Fill input[name="date"]
        await page.locator('input[name="date"]').fill('2022-01-31T01:23');
        // Uncheck #formBoxYes
        await page.locator('#formBoxYes').uncheck();
        // Check #formBoxNo
        await page.locator('#formBoxNo').check();
        // Select 1xer
        await page.locator('select[name="select"]').selectOption('1xer');
        // Click text=Submit Form
        await page.locator('text=Submit Form').click();
        // Click text=Text: aa Number: 11 Range: 50 Time: 2022-01-31T01:23 Boxes: NO NO Selection: 1xe
        await page.locator('text=Text: aa Number: 11 Range: 50 Time: 2022-01-31T01:23 Boxes: NO NO Selection: 1xe').click();
        // Click text=Clear Results
        await page.locator('text=Clear Results').click();
        // Click text=Form Cleared
        await page.locator('text=Form Cleared').click();
    })

    test('Form - SPA - Start on Form Page', async ({ page }) => {
        // Go to http://localhost:1313/APrettyHuGOinWebsite/?page=8
        await page.goto('http://localhost:1313/APrettyHuGOinWebsite/?page=8');
        // Click [placeholder="Type Something\, Will ya\?"]
        await page.locator('[placeholder="Type Something\\, Will ya\\?"]').click();
        // Fill [placeholder="Type Something\, Will ya\?"]
        await page.locator('[placeholder="Type Something\\, Will ya\\?"]').fill('aa');
        // Click input[name="number"]
        await page.locator('input[name="number"]').click();
        // Fill input[name="number"]
        await page.locator('input[name="number"]').fill('11');
        // Click input[name="date"]
        await page.locator('input[name="date"]').click();
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowRight
        await page.locator('input[name="date"]').press('ArrowRight');
        // Fill input[name="date"]
        await page.locator('input[name="date"]').fill('2022-01-31T11:11');
        // Uncheck #formBoxYes
        await page.locator('#formBoxYes').uncheck();
        // Check #formBoxNo
        await page.locator('#formBoxNo').check();
        // Select 1xer
        await page.locator('select[name="select"]').selectOption('1xer');
        // Click text=Submit Form
        await page.locator('text=Submit Form').click();
        // Click text=Text: aa Number: 11 Range: 50 Time: 2022-01-31T11:11 Boxes: NO NO Selection: 1xe
        await page.locator('text=Text: aa Number: 11 Range: 50 Time: 2022-01-31T11:11 Boxes: NO NO Selection: 1xe').click();
        // Click text=Clear Results
        await page.locator('text=Clear Results').click();
        // Click text=Form Cleared
        await page.locator('text=Form Cleared').click();
    })

    test('Form - Static site', async ({ page }) => {
        // Go to http://localhost:1313/APrettyHuGOinWebsite/diatribes/form/
        await page.goto('http://localhost:1313/APrettyHuGOinWebsite/diatribes/form/');
        // Click [placeholder="Type Something\, Will ya\?"]
        await page.locator('[placeholder="Type Something\\, Will ya\\?"]').click();
        // Fill [placeholder="Type Something\, Will ya\?"]
        await page.locator('[placeholder="Type Something\\, Will ya\\?"]').fill('aa');
        // Click input[name="number"]
        await page.locator('input[name="number"]').click();
        // Fill input[name="number"]
        await page.locator('input[name="number"]').fill('11');
        // Click input[name="date"]
        await page.locator('input[name="date"]').click();
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowLeft
        await page.locator('input[name="date"]').press('ArrowLeft');
        // Press ArrowRight
        await page.locator('input[name="date"]').press('ArrowRight');
        // Fill input[name="date"]
        await page.locator('input[name="date"]').fill('2022-11-30T11:11');
        // Uncheck #formBoxYes
        await page.locator('#formBoxYes').uncheck();
        // Check #formBoxNo
        await page.locator('#formBoxNo').check();
        // Select 1xer
        await page.locator('select[name="select"]').selectOption('1xer');
        // Click text=Submit Form
        await page.locator('text=Submit Form').click();
        // Click text=Text: aa Number: 11 Range: 50 Time: 2022-11-30T11:11 Boxes: NO NO Selection: 1xe
        await page.locator('text=Text: aa Number: 11 Range: 50 Time: 2022-11-30T11:11 Boxes: NO NO Selection: 1xe').click();
        // Click text=Clear Results
        await page.locator('text=Clear Results').click();
        // Click text=Form Cleared
        await page.locator('text=Form Cleared').click();
    })

})