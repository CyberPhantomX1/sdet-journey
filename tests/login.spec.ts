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