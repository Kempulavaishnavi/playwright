const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');

test('Successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.openLoginModal();
  await loginPage.login('test', 'test');
  await expect(loginPage.welcomeUserLink).toBeVisible();
});
