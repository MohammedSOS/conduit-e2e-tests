# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\conduit.spec.js >> User Registration
- Location: tests\conduit.spec.js:24:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('nav')
Expected substring: "user_d0l4bk67"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('nav')
    4 × locator resolved to <nav class="navbar navbar-light">…</nav>
      - unexpected value "conduit Source code Home Login Sign up"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { SignUpPage } from './pages/SignUpPage.js';
  3  | import { SignInPage } from './pages/SignInPage.js';
  4  | import { NewArticlePage } from './pages/NewArticlePage.js';
  5  | import { ArticlePage } from './pages/ArticlePage.js';
  6  | import { HomePage } from './pages/HomePage.js';
  7  | 
  8  | 
  9  | function randomString(length = 8) {
  10 |   return Math.random().toString(36).substring(2, 2 + length);
  11 | }
  12 | 
  13 | const username = `user_${randomString()}`;
  14 | const email = `user_${randomString()}@example.com`;
  15 | const password = `Pass_${randomString(6)}!`;
  16 | 
  17 | const articleTitle = `Article_${randomString(5)}`;
  18 | const articleDescription = `Description_${randomString(10)}`;
  19 | const articleBody = `Corps généré automatiquement: ${randomString(20)}`;
  20 | const articleTags = `tag_${randomString(4)}`;
  21 | 
  22 | const commentText = `Commentaire auto: ${randomString(12)}`;
  23 | 
  24 | test('User Registration', async ({ page }) => {
  25 |   const signUp = new SignUpPage(page);
  26 |   await page.goto('/');
  27 |   await signUp.register(username, email, password);
> 28 |   await expect(page.locator('nav')).toContainText(username);
     |                                     ^ Error: expect(locator).toContainText(expected) failed
  29 | });
  30 | 
  31 | test('Article Creation', async ({ page }) => {
  32 |   const signIn = new SignInPage(page);
  33 |   const newArticle = new NewArticlePage(page);
  34 | 
  35 |   await page.goto('/');
  36 |   await signIn.login(email, password);
  37 |   await newArticle.createArticle(articleTitle, articleDescription, articleBody, articleTags);
  38 |   await expect(page.locator('h1')).toHaveText(articleTitle);
  39 | });
  40 | 
  41 | test('Commenting', async ({ page }) => {
  42 |   const signIn = new SignInPage(page);
  43 |   const article = new ArticlePage(page);
  44 |   const homePage = new HomePage(page);
  45 | 
  46 |   await page.goto('/');
  47 |   await signIn.login(email, password);
  48 | 
  49 |   // 👉 Ici la modif : on utilise la HomePage pour retrouver l’article
  50 |   await homePage.openGlobalFeed();
  51 |   await page.waitForSelector(`text=${articleTitle}`, { timeout: 15000 });
  52 |   await page.click(`text=${articleTitle}`);
  53 | 
  54 |   // Ajoute le commentaire
  55 |   await article.addComment(commentText);
  56 |   await expect(page.locator('.card-text')).toHaveText(commentText);
  57 | });
  58 | 
```