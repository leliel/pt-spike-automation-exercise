import { test, expect } from '@playwright/test';
import { HomePage } from '../../automationExerciseModel/homepage';
import { createRandomUser } from '../../automationExerciseModel/userGenerator';
 
test('Register during checkout', async ({ page }) => {
  await page.goto('');
  const home = new HomePage(page);

  // Expect a title "to contain" Automation Exercise.
  await expect(page).toHaveTitle(/Automation Exercise/);

  //add the "Blue Top" to cart
  await page.getByText("Blue Top").first().hover(); //Hover here forces the actual element to be added to the DOM.
  await home.getAddToCartButton().click();

  //Expect that the Added dialog will become visible
  await expect(page.getByText("your product has been added to cart")).toBeVisible();
  await expect(home.getContinueShoppingButton()).toBeVisible();

  await home.getViewCartLink().click();
  await expect(page.getByText("Blue Top")).toBeVisible();
  await expect(page.getByText("Proceed To Checkout")).toBeVisible();

  await page.getByText("Proceed To Checkout").click();

  await expect(page.getByText("Register / Login account to proceed on checkout")).toBeVisible();
  await expect(page.getByRole("button", {name: "Continue On Cart"})).toBeVisible();

  await page.getByText("Register / Login", {exact: true}).click();

  await expect(page.getByRole("button", {name: "Signup"})).toBeVisible();
  await expect(page.getByRole("button", {name: "Login"})).toBeVisible();
  await expect(page.getByText("New User Signup!")).toBeVisible();

  const user = createRandomUser();
  await page.getByRole("textbox", {name: "Name"}).fill(user.userName);
  await page.getByPlaceholder("Email Address").nth(1).fill(user.email);
  await page.getByRole("button", {name: "signup"}).click();

  await page.getByRole("radio", {name: user.title}).click();
  await page.getByRole("textbox" , {name: "Password"}).fill(user.password);
  await page.locator('#days').selectOption(user.birthDate.toLocaleString("default", {day: "2-digit"}));
  await page.locator('#months').selectOption(user.birthDate.toLocaleString('default', {month: "long"}));
  await page.locator("#years").selectOption(user.birthDate.toLocaleString('default', {year: "numeric"}));

  await page.getByRole('textbox', { name: 'First name *' }).fill(user.firstName);
  await page.getByRole('textbox', { name: 'Last name' }).fill(user.lastName);
  await page.getByRole('textbox', { name: 'Address *' }).fill(user.streetAddress);
  await page.getByLabel("Country").selectOption(user.country);
  await page.getByRole('textbox', {name: 'state'}).fill(user.state);
  await page.getByRole('textbox', {name: "city"}).fill(user.city);
  await page.getByRole('textbox', {name: 'Zipcode'}).fill(user.zip);
  await page.getByRole('textbox', {name: 'mobile number'}).fill(user.mobileNumber);

  await page.getByRole('button', {name: 'Create Account'}).click();
});