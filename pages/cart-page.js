// pages/cart-page.js
class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTable = page.locator('#tbodyid');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/cart.html');
    await this.cartTable.waitFor({ state: 'visible', timeout: 10000 });
  }

  getProductRow(productName) {
    return this.cartTable.locator('tr', { hasText: productName });
  }

  async deleteProduct(productName) {
    const row = this.getProductRow(productName);
    const deleteButton = row.locator('a', { hasText: 'Delete' });
    await deleteButton.click();
    await this.page.waitForTimeout(1000); // Wait for deletion
  }

  async isProductInCart(productName) {
    const row = this.getProductRow(productName);
    return await row.count() > 0;
  }
}

module.exports = { CartPage };
