import { test, expect } from '@playwright/test';
import { SignUpPage } from './pages/SignUpPage.js';
import { SignInPage } from './pages/SignInPage.js';
import { NewArticlePage } from './pages/NewArticlePage.js';
import { ArticlePage } from './pages/ArticlePage.js';
import { HomePage } from './pages/HomePage.js';


function randomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

const username = `user_${randomString()}`;
const email = `user_${randomString()}@example.com`;
const password = `Pass_${randomString(6)}!`;

const articleTitle = `Article_${randomString(5)}`;
const articleDescription = `Description_${randomString(10)}`;
const articleBody = `Corps généré automatiquement: ${randomString(20)}`;
const articleTags = `tag_${randomString(4)}`;

const commentText = `Commentaire auto: ${randomString(12)}`;

test('User Registration', async ({ page }) => {
  const signUp = new SignUpPage(page);
  await page.goto('/');
  await signUp.register(username, email, password);
  await expect(page.locator('nav')).toContainText(username);
});

test('Article Creation', async ({ page }) => {
  const signIn = new SignInPage(page);
  const newArticle = new NewArticlePage(page);

  await page.goto('/');
  await signIn.login(email, password);
  await newArticle.createArticle(articleTitle, articleDescription, articleBody, articleTags);
  await expect(page.locator('h1')).toHaveText(articleTitle);
});

test('Commenting', async ({ page }) => {
  const signIn = new SignInPage(page);
  const article = new ArticlePage(page);
  const homePage = new HomePage(page);

  await page.goto('/');
  await signIn.login(email, password);

  // 👉 Ici la modif : on utilise la HomePage pour retrouver l’article
  await homePage.openGlobalFeed();
  await page.waitForSelector(`text=${articleTitle}`, { timeout: 15000 });
  await page.click(`text=${articleTitle}`);

  // Ajoute le commentaire
  await article.addComment(commentText);
  await expect(page.locator('.card-text')).toHaveText(commentText);
});
