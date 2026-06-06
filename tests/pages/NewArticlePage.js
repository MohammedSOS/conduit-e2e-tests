import { BasePage } from './BasePage.js';

export class NewArticlePage extends BasePage {
  constructor(page) {
    super(page);
    this.newArticleLink = 'a[href="#/editor"]';
    this.titleInput = 'input[placeholder="Article Title"]';
    this.descriptionInput = 'input[placeholder="What\'s this article about?"]';
    this.bodyTextarea = 'textarea[placeholder="Write your article (in markdown)"]';
    this.tagsInput = 'input[placeholder="Enter tags"]';
    this.publishButton = 'button:has-text("Publish Article")';
  }

  async createArticle(title, description, body, tags) {
    await this.page.click(this.newArticleLink);
    await this.page.fill(this.titleInput, title);
    await this.page.fill(this.descriptionInput, description);
    await this.page.fill(this.bodyTextarea, body);
    await this.page.fill(this.tagsInput, tags);
    await this.page.click(this.publishButton);
  }
}
