// tests/contactPage.spec.js
const { test, expect } = require('@playwright/test');
const ContactPage = require('../pages/ContactPage');

test.describe('Contact Page Tests', () => {
    let contactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.goto();
        await contactPage.openContactModal(); // open the modal before filling
    });

    test('Fill and submit contact form', async ({ page }) => {
        await contactPage.fillForm('John Doe', 'john@example.com', 'Hello Playwright!');
        await contactPage.submitForm();

        // You can add assertions depending on what happens after submit
        // Example: modal closes
        await expect(page.locator('#exampleModal')).toBeHidden();
    });
});
