// pages/home-page.js
class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = page.locator('#tbodyid'); // Main product container
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
    // Wait for the product container to be visible instead of networkidle
    await this.productList.waitFor({ state: 'visible', timeout: 10000 });
  }

  async selectProduct(productName) {
    const product = this.page.locator('.card-title', { hasText: productName });
    await product.click();
  }

  async addToCart() {
    const addButton = this.page.locator('a', { hasText: 'Add to cart' });
    await addButton.click();
    await this.page.waitForTimeout(1000); // Wait for alert
    await this.page.on('dialog', async dialog => {
      await dialog.accept();
    });
  }
}

module.exports = { HomePage };
