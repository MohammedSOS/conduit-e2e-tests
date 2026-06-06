# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\conduit.spec.js >> Article Creation
- Location: tests\conduit.spec.js:31:5

# Error details

```
Error: page.click: Test ended.
Call log:
  - waiting for locator('a[href="#/editor"]')

```

# Test source

```ts
  1  | import { BasePage } from './BasePage.js';
  2  | 
  3  | export class NewArticlePage extends BasePage {
  4  |   constructor(page) {
  5  |     super(page);
  6  |     this.newArticleLink = 'a[href="#/editor"]';
  7  |     this.titleInput = 'input[placeholder="Article Title"]';
  8  |     this.descriptionInput = 'input[placeholder="What\'s this article about?"]';
  9  |     this.bodyTextarea = 'textarea[placeholder="Write your article (in markdown)"]';
  10 |     this.tagsInput = 'input[placeholder="Enter tags"]';
  11 |     this.publishButton = 'button:has-text("Publish Article")';
  12 |   }
  13 | 
  14 |   async createArticle(title, description, body, tags) {
> 15 |     await this.page.click(this.newArticleLink);
     |                     ^ Error: page.click: Test ended.
  16 |     await this.page.fill(this.titleInput, title);
  17 |     await this.page.fill(this.descriptionInput, description);
  18 |     await this.page.fill(this.bodyTextarea, body);
  19 |     await this.page.fill(this.tagsInput, tags);
  20 |     await this.page.click(this.publishButton);
  21 |   }
  22 | }
  23 | 
```