import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.getByText('Products')).toBeVisible();
});

test('user cannot login with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'wrongpassword');
  
  await expect(await loginPage.getErrorMessage()).toBeVisible();
});

test('locked out user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  
  await expect(await loginPage.getErrorMessage()).toBeVisible();
});

test('user cannot login with empty fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('', '');
  
  await expect(await loginPage.getErrorMessage()).toBeVisible();
});