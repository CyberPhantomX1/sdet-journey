import{ test, expect} from '@playwright/test'

test('user can login successfully', async ({ page }) => {

    // Step 1: Go to the site
    await page.goto('https://www.saucedemo.com');
    // Step 2: Fill Username
    await page.getByPlaceholder('Username').fill('standard_user');
    // Step 3: Fill Password
    await page.getByPlaceholder('Password').fill('secret_sauce');
    // Step 4: Click Login Button 
    await page.locator('[data-test="login-button"]').click();
    // Step 5: Verify login was Successful
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('user cannot login with wrong password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrongpassword');
    await page.locator('[data-test="login-button"]').click();
    //Error message dikhna chahiye
    await expect(page.locator('[data-test="error-button"]')).toBeVisible;
});

test('locked out user cannot login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Locked out error dikhna chahiye
  await expect(page.locator('[data-test="error-button"]')).toBeVisible();
});

test('user cannot login with empty fields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error-button"]')).toBeVisible(); 
});