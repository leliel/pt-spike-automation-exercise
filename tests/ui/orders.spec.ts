import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import { createRandomUser, getNameWithTitle } from '../../automationExerciseFuntions/userGenerator';
import { clickSignUp, createUser, fillAddress, fillBirthDate, fillEmail, fillFirstNaame, fillLastname, fillMobile, fillName, fillPassword, selectTitle } from '../../automationExerciseFuntions/pageFillers/signup';
import { addProductToCart, clickCartLink, clickDeleteAccountButton, clickViewCartLink } from '../../automationExerciseFuntions/pageFillers/homepage';
import { locateAddressBlock, verifyAddress } from '../../automationExerciseFuntions/pageVerifiers/order';
import { clickContinue } from '../../automationExerciseFuntions/pageFillers/order';
 
test('Register during checkout', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" Automation Exercise.
  await expect(page).toHaveTitle(/Automation Exercise/);

  //add the "Blue Top" to cart
  await addProductToCart(page, "Blue Top");

  //Expect that the Added dialog will become visible
  await expect(page.getByText("your product has been added to cart")).toBeVisible();

  await clickViewCartLink(page);
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

  await fillName(page, user.userName);
  await fillEmail(page, user.email)
  await clickSignUp(page);

  await selectTitle(page, user.title);
  await fillPassword(page, user.password);
  await fillBirthDate(page, user.birthDate);
  await fillFirstNaame(page, user.firstName);
  await fillLastname(page, user.lastName);
  await fillAddress(page, user.address);
  await fillMobile(page, user.mobileNumber);
  await createUser(page);

  await expect(page.getByText("Account Created")).toBeVisible();
  await expect(page.getByRole('link', { name: 'Continue' })).toBeVisible();

  await page.getByRole('link', { name: 'Continue' }).click();
  
  await expect(page.getByText(`Logged in as ${user.userName}`)).toBeVisible();
  
  await clickCartLink(page);
  await page.getByText("Proceed To Checkout").click();

  const deliveryLocator = locateAddressBlock(page, user.title, true);
  await verifyAddress(deliveryLocator, user.address, getNameWithTitle(user));

  const billingLocator = locateAddressBlock(page, user.title, false);
  await verifyAddress(billingLocator, user.address, getNameWithTitle(user));

  await page.locator('textarea[name="message"]').fill(faker.lorem.sentences());
  await page.getByRole('link', { name: 'Place Order' }).click();

  await page.getByTestId('name-on-card').fill(`${user.firstName} ${user.lastName}`);
  await page.getByTestId('card-number').fill(user.creditCard.ccNumber);
  await page.getByTestId('cvc').fill(user.creditCard.cvc);
  await page.getByTestId('expiry-month').fill(user.creditCard.expiration.toLocaleDateString('default', {month: "2-digit"}));
  await page.getByTestId('expiry-year').fill(user.creditCard.expiration.toLocaleString('default', {year: 'numeric'}));

  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await expect(page.getByText('Order placed!')).toBeVisible();

  await clickContinue(page);
  await clickDeleteAccountButton(page);
  await clickContinue(page);
});