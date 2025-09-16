const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButtonHeader = page.locator('#login2');
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.submitButton = page.locator("button[onclick='logIn()']");
    this.welcomeUserLink = page.locator('#nameofuser');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async openLoginModal() {
    await this.loginButtonHeader.click();
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

module.exports = { LoginPage };
