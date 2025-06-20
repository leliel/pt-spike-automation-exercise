import { test, expect } from '@playwright/test';
import { HomePage } from '../../automationExerciseModel/homepage';


test('Register during checkout', async ({ page }) => {
  await page.goto('');
  const home = new HomePage(page);

  // Expect a title "to contain" Automation Exercise.
  await expect(page).toHaveTitle(/Automation Exercise/);

  //add the "Blue Top" to cart
  await home.getAddToCartButton("Blue Top").click();

  //Expect that the Added dialog will become visible
  await expect(page.getByText("your product has been added to cart")).toBeVisible();
  await expect(home.getContinueShoppingButton()).toBeVisible();
  await expect(home.getContinueShoppingButton()).toBeEnabled();

  await home.getViewCartLink().click();

});