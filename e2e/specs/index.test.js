const load = async () => {
    await page.goto(URL, {
        waitUntil: 'networkidle0',
        timeout: 60000,
    });
};

describe('Create List', () => {
    beforeEach(async () => {
        await load();
    });

    it('should show the title correctly', async () => {
        const textContent = await page.evaluate(() => {
            const title = document.getElementById('title');
            return title.textContent;
        });
        expect(textContent).toEqual('Tag your Lists');
    });
    it('should create a list item succesfully', async () => {
        await page.waitForSelector('#listName');
        await page.type('#listName', 'Test');
        await page.click('#colorPicker');
        await page.click('#colorRed');
        await page.click('#shapePicker');
        await page.click('#shapeCircle');
        await page.click('#addList');
        await page.waitForSelector('#listTest');

        const textContent = await page.evaluate(() => {
            const title = document.getElementById('listTest');
            return title.textContent;
        });
        expect(textContent).toEqual('Test');
    }, 900000);

    it('should create a tag item succesfully', async () => {
        await page.waitForSelector('#TestNewTag');
        await page.type('#TestNewTag', 'TestTag');
        await page.click('#TestCreateNewTag');
        await page.waitForSelector('#TestTagText');

        const textContent = await page.evaluate(() => {
            const title = document.getElementById('TestTagText');
            return title.textContent;
        });
        expect(textContent).toEqual('- TestTag');
    }, 900000);

    it('should delete a tag successfully', async () => {
        await page.waitForSelector('#TestTagDelete');
        await page.click('#TestTagDelete');
    }, 900000);

    it('should delete a list item successfully', async () => {
        await page.waitForSelector('#TestDelete');
        await page.click('#TestDelete');
    }, 900000);
});
