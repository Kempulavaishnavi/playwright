// pages/homepage.js
import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.demoblaze.com';
    this.productLink = (productName) => this.page.locator(`.hrefch:has-text("${productName}")`);
    this.addToCartButton = this.page.locator('a:has-text("Add to cart")');
  }

  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  // Selects a product from homepage and opens its details page
  async selectProduct(productName) {
    await this.productLink(productName).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  // Adds product to cart after navigating to product page
  async addToCart() {
    await this.addToCartButton.click();
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
  }

  // ✅ Unified helper: open product and add to cart (for homepage.spec.js)
  async addProductToCart(productName) {
    await this.selectProduct(productName);
    await this.addToCart();
  }
}
