const { test, expect } = require('@playwright/test');

test.describe("HuGOin Navigation", () => {
    test('Navigate Forward - SPA', async ({ page }) => {
        // Go to http://localhost:1313/APrettyHuGoinWebsite/
        await page.goto('http://localhost:1313/APrettyHuGoinWebsite/');

        // Go to http://localhost:1313/APrettyHuGoinWebsite/?page=1
        await page.goto('http://localhost:1313/APrettyHuGoinWebsite/?page=1');

        // Click h2:has-text("Foreword")
        await page.locator('h2:has-text("Foreword")').click();

        // Click text=page 1 of 12
        await page.locator('text=page 1 of 12').click();

        // Click label:has-text("Foreword")
        await page.locator('label:has-text("Foreword")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=1');

        // Click button:has-text("Next")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=2' }*/),
            page.locator('button:has-text("Next")').click()
        ]);

        // Click text=Why Another Jekyllin' Website?
        await page.locator('text=Why Another Jekyllin\' Website?').click();

        // Click text=Why?
        await page.locator('text=Why?').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=2');

        // Click text=Next
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=3' }*/),
            page.locator('text=Next').click()
        ]);

        // Click text=Section Headings: A Modest Proposal
        await page.locator('text=Section Headings: A Modest Proposal').click();

        // Click label:has-text("Headings")
        await page.locator('label:has-text("Headings")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=3');

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=4');

        // Click text=Data Organization
        await page.locator('text=Data Organization').click();

        // Click label:has-text("Data")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=4' }*/),
            page.locator('label:has-text("Data")').click()
        ]);

        // Click text=Next
        await page.locator('text=Next').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=5');

        // Click h2:has-text("Tables")
        await page.locator('h2:has-text("Tables")').click();

        // Click label:has-text("Tables")
        await page.locator('label:has-text("Tables")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=5');

        // Click text=page 5 of 12
        await page.locator('text=page 5 of 12').click();

        // Click text=Next
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=6' }*/),
            page.locator('text=Next').click()
        ]);

        // Click h2:has-text("Lists")
        await page.locator('h2:has-text("Lists")').click();

        // Click label:has-text("Lists")
        await page.locator('label:has-text("Lists")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=6');

        // Click text=page 6 of 12
        await page.locator('text=page 6 of 12').click();

        // Click text=Next
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=7' }*/),
            page.locator('text=Next').click()
        ]);

        // Click text=Other Informational Widgets
        await page.locator('text=Other Informational Widgets').click();

        // Click text=Other Widgets
        await page.locator('text=Other Widgets').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=7');

        // Click text=page 7 of 12
        await page.locator('text=page 7 of 12').click();

        // Click button:has-text("Next")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=8' }*/),
            page.locator('button:has-text("Next")').click()
        ]);

        // Click text=Forms are Fundamental
        await page.locator('text=Forms are Fundamental').click();

        // Click label:has-text("Forms")
        await page.locator('label:has-text("Forms")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=8');

        // Click text=page 8 of 12
        await page.locator('text=page 8 of 12').click();

        // Click text=Next
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=9' }*/),
            page.locator('text=Next').click()
        ]);

        // Click text=Media, images and other pretty things
        await page.locator('text=Media, images and other pretty things').click();

        // Click text=Multimedia
        await page.locator('text=Multimedia').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=9');

        // Click text=page 9 of 12
        await page.locator('text=page 9 of 12').click();

        // Click text=Next
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=10' }*/),
            page.locator('text=Next').click()
        ]);

        // Click text=Pretty Heckin' Website is not a satire
        await page.locator('text=Pretty Heckin\' Website is not a satire').click();

        // Click label:has-text("Satire")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=10' }*/),
            page.locator('label:has-text("Satire")').click()
        ]);

        // Click text=page 10 of 12
        await page.locator('text=page 10 of 12').click();

        // Click text=Next
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=11' }*/),
            page.locator('text=Next').click()
        ]);

        // Click h2:has-text("Epilogue")
        await page.locator('h2:has-text("Epilogue")').click();

        // Click label:has-text("Epilogue")
        await page.locator('label:has-text("Epilogue")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=11');

        // Click text=page 11 of 12
        await page.locator('text=page 11 of 12').click();

        // Click text=Next
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=12' }*/),
            page.locator('text=Next').click()
        ]);

        // Click h2:has-text("About")
        await page.locator('h2:has-text("About")').click();

        // Click label:has-text("About")
        await page.locator('label:has-text("About")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=12');

        // Click text=page 12 of 12
        await page.locator('text=page 12 of 12').click();

        // Click text=Start
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=1' }*/),
            page.locator('text=Start').click()
        ]);

        // Click h2:has-text("Foreword")
        await page.locator('h2:has-text("Foreword")').click();

        // Click label:has-text("Foreword")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=1' }*/),
            page.locator('label:has-text("Foreword")').click()
        ]);

        // Click text=page 1 of 12
        await page.locator('text=page 1 of 12').click();
    })

    test('Navigate Backward - SPA', async ({page}) => {
        await page.goto('http://localhost:1313/APrettyHuGoinWebsite/?page=1');
        // Click button:has-text("About")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=12' }*/),
            page.locator('button:has-text("About")').click()
        ]);

        // Click h2:has-text("About")
        await page.locator('h2:has-text("About")').click();

        // Click label:has-text("About")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=12' }*/),
            page.locator('label:has-text("About")').click()
        ]);

        // Click text=page 12 of 12
        await page.locator('text=page 12 of 12').click();

        // Click text=Prev
        await page.locator('text=Prev').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=11');

        // Click h2:has-text("Epilogue")
        await page.locator('h2:has-text("Epilogue")').click();

        // Click label:has-text("Epilogue")
        await page.locator('label:has-text("Epilogue")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=11');

        // Click text=page 11 of 12
        await page.locator('text=page 11 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=10' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click text=Pretty Heckin' Website is not a satire
        await page.locator('text=Pretty Heckin\' Website is not a satire').click();

        // Click label:has-text("Satire")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=10' }*/),
            page.locator('label:has-text("Satire")').click()
        ]);

        // Click text=page 10 of 12
        await page.locator('text=page 10 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=9' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click text=Media, images and other pretty things
        await page.locator('text=Media, images and other pretty things').click();

        // Click text=Multimedia
        await page.locator('text=Multimedia').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=9');

        // Click text=page 9 of 12
        await page.locator('text=page 9 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=8' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click text=Forms are Fundamental
        await page.locator('text=Forms are Fundamental').click();

        // Click label:has-text("Forms")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=8' }*/),
            page.locator('label:has-text("Forms")').click()
        ]);

        // Click text=page 8 of 12
        await page.locator('text=page 8 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=7' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click text=Other Informational Widgets
        await page.locator('text=Other Informational Widgets').click();

        // Click text=Other Widgets
        await page.locator('text=Other Widgets').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=7');

        // Click text=page 7 of 12
        await page.locator('text=page 7 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=6' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click h2:has-text("Lists")
        await page.locator('h2:has-text("Lists")').click();

        // Click label:has-text("Lists")
        await page.locator('label:has-text("Lists")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=6');

        // Click text=6
        await page.locator('text=6').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=5' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click h2:has-text("Tables")
        await page.locator('h2:has-text("Tables")').click();

        // Click label:has-text("Tables")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=5' }*/),
            page.locator('label:has-text("Tables")').click()
        ]);

        // Click text=page 5 of 12
        await page.locator('text=page 5 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=4' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click text=Data Organization
        await page.locator('text=Data Organization').click();

        // Click label:has-text("Data")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=4' }*/),
            page.locator('label:has-text("Data")').click()
        ]);

        // Click text=page 4 of 12
        await page.locator('text=page 4 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=3' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click text=Section Headings: A Modest Proposal
        await page.locator('text=Section Headings: A Modest Proposal').click();

        // Click label:has-text("Headings")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=3' }*/),
            page.locator('label:has-text("Headings")').click()
        ]);

        // Click text=page 3 of 12
        await page.locator('text=page 3 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=2' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click text=Why Another Jekyllin' Website?
        await page.locator('text=Why Another Jekyllin\' Website?').click();

        // Click text=Why?
        await page.locator('text=Why?').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=2');

        // Click text=page 2 of 12
        await page.locator('text=page 2 of 12').click();

        // Click text=Prev
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=1' }*/),
            page.locator('text=Prev').click()
        ]);

        // Click h2:has-text("Foreword")
        await page.locator('h2:has-text("Foreword")').click();

        // Click label:has-text("Foreword")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=1' }*/),
            page.locator('label:has-text("Foreword")').click()
        ]);

        // Click text=page 1 of 12
        await page.locator('text=page 1 of 12').click();

        // Click button:has-text("About")
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:1313/APrettyHuGoinWebsite/?page=12' }*/),
            page.locator('button:has-text("About")').click()
        ]);

        // Click h2:has-text("About")
        await page.locator('h2:has-text("About")').click();

        // Click label:has-text("About")
        await page.locator('label:has-text("About")').click();
        await expect(page).toHaveURL('http://localhost:1313/APrettyHuGoinWebsite/?page=12');

        // Click text=page 12 of 12
        await page.locator('text=page 12 of 12').click();
    })
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