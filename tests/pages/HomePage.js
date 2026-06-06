import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // Sélecteurs
    this.globalFeedButton = 'button:has-text("Global Feed")';
    this.articlePreview = '.article-preview';
    this.articleTitle = 'a.preview-link h1';
    this.articleDescription = 'a.preview-link p';
    this.readMoreLink = 'a.preview-link span:has-text("Read more...")';
    this.likeButton = 'button.btn.btn-sm.btn-outline-primary';
    this.tagList = 'ul.tag-list li';
  }

  async openGlobalFeed() {
    await this.page.click(this.globalFeedButton);
  }

  async openFirstArticle() {
    await this.page.click(`${this.articlePreview} >> ${this.articleTitle}`);
  }

  async likeFirstArticle() {
    await this.page.click(`${this.articlePreview} >> ${this.likeButton}`);
  }

  async getFirstArticleTitle() {
    return await this.page.textContent(`${this.articlePreview} >> ${this.articleTitle}`);
  }

  async getFirstArticleDescription() {
    return await this.page.textContent(`${this.articlePreview} >> ${this.articleDescription}`);
  }

  async getTags() {
    return await this.page.$$eval(this.tagList, tags => tags.map(tag => tag.textContent.trim()));
  }
}
