import { BasePage } from './BasePage.js';

export class SignInPage extends BasePage {
  constructor(page) {
    super(page);
    // Sélecteurs
    this.signInLink = 'a[href="#/login"]';
    this.emailInput = 'input[placeholder="Email"]';
    this.passwordInput = 'input[placeholder="Password"]';
    this.submitButton = 'button:has-text("Login")'; // ✅ pas "Sign in"
  }

  async login(email, password) {
    await this.page.click(this.signInLink);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.waitForSelector(this.submitButton);
    await this.page.click(this.submitButton);
  }
}
