import { BasePage } from './BasePage.js';

export class SignUpPage extends BasePage {
  constructor(page) {
    super(page);
    // Définition des sélecteurs
    this.signUpLink = 'a[href="#/register"]';
    this.usernameInput = 'input[placeholder="Your Name"]';
    this.emailInput = 'input[placeholder="Email"]';
    this.passwordInput = 'input[placeholder="Password"]';
    this.submitButton = 'button:has-text("Sign up")';
  }

  async register(username, email, password) {
    await this.page.click(this.signUpLink);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}
