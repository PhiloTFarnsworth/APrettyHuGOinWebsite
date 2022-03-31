const { test, expect } = require('@playwright/test');

test.describe("HuGOin Static Navigation", () => {
    test('Navigate Static Site', async ({ page }) => {
        await page.goto('http://localhost:1313/APrettyHuGoinWebsite/?page=1');
        // Click a:has-text("A Pretty HuGOin' Website")
        await page.locator('a:has-text("A Pretty HuGOin\' Website")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/');

        // Click text=Diatribes
        await page.locator('text=Diatribes').click();

        // Click text=Start Reading
        await page.locator('text=Start Reading').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/index/');

        // Click h2:has-text("Foreword")
        await page.locator('h2:has-text("Foreword")').click();

        // Click text=page 1 of 12
        await page.locator('text=page 1 of 12').click();

        // Click a:has-text("Next")
        await page.locator('a:has-text("Next")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/why/');

        // Click text=page 2 of 12
        await page.locator('text=page 2 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/section/');

        // Click text=page 3 of 12
        await page.locator('text=page 3 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/data/');

        // Click text=page 4 of 12
        await page.locator('text=page 4 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/tables/');

        // Click text=page 5 of 12
        await page.locator('text=page 5 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/lists/');

        // Click text=page 6 of 12
        await page.locator('text=page 6 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/other/');

        // Click text=page 7 of 12
        await page.locator('text=page 7 of 12').click();

        // Click a:has-text("Next")
        await page.locator('a:has-text("Next")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/form/');

        // Click text=page 8 of 12
        await page.locator('text=page 8 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/media/');

        // Click text=page 9 of 12
        await page.locator('text=page 9 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/satire/');

        // Click text=page 10 of 12
        await page.locator('text=page 10 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/epilogue/');

        // Click text=page 11 of 12
        await page.locator('text=page 11 of 12').click();

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/about/');

        // Click text=page 12 of 12
        await page.locator('text=page 12 of 12').click();

        // Click text=Start
        await page.locator('text=Start').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/index/');

        // Click text=page 1 of 12
        await page.locator('text=page 1 of 12').click();

        // Click text=About
        await page.locator('text=About').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/about/');

        // Click text=page 12 of 12
        await page.locator('text=page 12 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/epilogue/');

        // Click text=page 11 of 12
        await page.locator('text=page 11 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/satire/');

        // Click text=page 10 of 12
        await page.locator('text=page 10 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/media/');

        // Click text=page 9 of 12
        await page.locator('text=page 9 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/form/');

        // Click text=page 8 of 12
        await page.locator('text=page 8 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/other/');

        // Click text=page 7 of 12
        await page.locator('text=page 7 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/lists/');

        // Click text=page 6 of 12
        await page.locator('text=page 6 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/tables/');

        // Click text=page 5 of 12
        await page.locator('text=page 5 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/data/');

        // Click text=page 4 of 12
        await page.locator('text=page 4 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/section/');

        // Click text=page 3 of 12
        await page.locator('text=page 3 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/why/');

        // Click text=page 2 of 12
        await page.locator('text=page 2 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/index/');

        // Click text=page 1 of 12
        await page.locator('text=page 1 of 12').click();

        // Click text=About
        await page.locator('text=About').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/about/');

        // Click text=page 12 of 12
        await page.locator('text=page 12 of 12').click();

        // Click div:nth-child(7) a
        await page.locator('div:nth-child(7) a').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/lists/');

        // Click label:has-text("Lists")
        await page.locator('label:has-text("Lists")').click();

        // Click div:nth-child(12) a
        await page.locator('div:nth-child(12) a').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/epilogue/');

        // Click label:has-text("Epilogue")
        await page.locator('label:has-text("Epilogue")').click();

        // Click text=page 11 of 12
        await page.locator('text=page 11 of 12').click();

        // Click div:nth-child(3)
        await page.locator('div:nth-child(3)').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/diatribes/why/');

        // Click text=Why?
        await page.locator('text=Why?').click();

        // Click text=page 2 of 12
        await page.locator('text=page 2 of 12').click();
    })
})