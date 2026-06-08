import { Page } from '@playwright/test';

export class LoginPage {
  
  // Page store karo
  constructor(private page: Page) {}

  // Site pe jao
  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  // Login karo
  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  // Error message lo
  async getErrorMessage() {
    return this.page.locator('[data-test="error-button"]');
  }

}