const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { HomePage } = require('../pages/home-page');
const { CartPage } = require('../pages/cart-page');

test.describe('Cart functionality', () => {
  let loginPage, homePage, cartPage;
  const productName = 'Samsung galaxy s6';

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.openLoginModal();
    await loginPage.login('test', 'test');

    await homePage.goto();
    await homePage.selectProduct(productName);
    await homePage.addToCart();
  });

  test('User can view product in the cart', async ({ page }) => {
    await cartPage.goto();
    const productRow = await cartPage.getProductRow(productName);
    await productRow.waitFor({ state: 'visible' });
  });

  test('User can delete product from the cart', async ({ page }) => {
    await cartPage.goto();
    await cartPage.deleteProduct(productName);
  });
});
