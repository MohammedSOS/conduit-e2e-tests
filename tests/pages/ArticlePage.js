import { BasePage } from './BasePage.js';

export class ArticlePage extends BasePage {
  constructor(page) {
    super(page);
    // Sélecteurs
    this.commentTextarea = 'textarea[placeholder="Write a comment..."]';
    this.postCommentButton = 'button:has-text("Post Comment")';
    this.commentTextLocator = '.card-text';
  }

  async addComment(comment) {
    await this.page.fill(this.commentTextarea, comment);
    await this.page.click(this.postCommentButton);
  }
}
