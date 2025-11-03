import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// USER MODEL - Kayıt işlemleri
Given('kayıt sayfasındayım', () => {
  cy.visit('/register.html');
  cy.wait(500);
});

When('{string} alanına {string} yazarım', (fieldName, value) => {
  cy.get(`input[name="${fieldName.toLowerCase()}"], input[placeholder*="${fieldName}"]`)
    .clear()
    .type(value);
  cy.wait(300);
});

When('kayıt butonuna tıklarım', () => {
  cy.get('button[type="submit"]').click();
  cy.wait(500);
});

Then('{string} mesajı görmeliyim', (message) => {
  cy.contains(message, { timeout: 10000 }).should('be.visible');
  cy.wait(2000);
});

// CATEGORY MODEL - Kategori işlemleri
When('ana sayfaya giderim', () => {
  cy.visit('/index.html');
  cy.wait(500);
});

Then('kategori listesini görmeliyim', () => {
  cy.get('[data-testid="category-list"], .category-list').should('be.visible');
  cy.wait(300);
});

Then('{string} kategorisi görünmelidir', (categoryName) => {
  cy.contains(categoryName, { timeout: 15000 }).should('be.visible');
  cy.wait(2000);
});

// POST MODEL - Yazı işlemleri
When('yeni yazı butonuna tıklarım', () => {
  cy.contains('button', 'Yeni Yazı').click();
  cy.wait(500);
});

When('yazı başlığı alanına {string} yazarım', (title) => {
  cy.get('input[name="title"], textarea[name="title"]').clear().type(title);
  cy.wait(300);
});

When('yazı içeriği alanına {string} yazarım', (content) => {
  cy.get('textarea[name="content"], textarea[name="body"]').clear().type(content);
  cy.wait(300);
});

When('kategori dropdown\'ından {string} seçerim', (category) => {
  cy.get('select[name="category"], select[name="category_id"]').select(category);
  cy.wait(300);
});

When('yayınla butonuna tıklarım', () => {
  cy.contains('button', 'Yayınla').click();
  cy.wait(500);
});

Then('yazı listesinde {string} görünmelidir', (postTitle) => {
  cy.contains(postTitle, { timeout: 10000 }).should('be.visible');
  cy.wait(300);
});

When('{string} yazısına tıklarım', (postTitle) => {
  cy.contains(postTitle).click();
  cy.wait(500);
});

Then('yazı detay sayfasını görmeliyim', () => {
  cy.get('[data-testid="post-detail"], .post-detail, article').should('be.visible');
  cy.wait(300);
});

// COMMENT MODEL - Yorum işlemleri
When('yorum alanına {string} yazarım', (comment) => {
  cy.get('textarea[name="comment"], input[name="comment"]').clear().type(comment);
  cy.wait(300);
});

When('yorum yap butonuna tıklarım', () => {
  cy.contains('button', 'Yorum Yap').click();
  cy.wait(500);
});

Then('yorumlar bölümünde {string} görünmelidir', (comment) => {
  cy.contains(comment, { timeout: 10000 }).should('be.visible');
  cy.wait(1000);
});

// LIKE MODEL - Beğeni işlemleri
When('beğen butonuna tıklarım', () => {
  cy.contains('button', 'Beğen').click();
  cy.wait(3000);
});

Then('beğeni sayısı {string} olmalıdır', (count) => {
  cy.get('#likeCount', { timeout: 15000 }).should('contain', count);
  cy.wait(2000);
});

Then('{string} butonu {string} olarak değişmelidir', (oldText, newText) => {
  cy.contains('button', newText, { timeout: 10000 }).should('be.visible');
  cy.wait(1000);
});