const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { HomePage } = require('../pages/home-page');

test('User can select a product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();
  await loginPage.login('test', 'test');

  await homePage.goto();
  await homePage.selectProduct('Samsung galaxy s6');
  await homePage.addToCart();
});
