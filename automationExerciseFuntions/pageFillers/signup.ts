import { Page } from '@playwright/test';
import { Address } from '../userGenerator';

export async function clickSignUp(page: Page): Promise<void> {
    await page.getByTestId('signup-button').click();
}

export async function fillName(page: Page, name: string): Promise<void> {
    await page.getByTestId('signup-name').fill(name);
}

export async function fillEmail(page: Page, email: string): Promise<void> {
    await page.getByTestId("signup-email").fill(email);
}

export async function selectTitle(page: Page, title: string): Promise<void> { 
    await page.getByRole("radio", {name: title}).click();
}

export async function fillPassword(page: Page, pass: string): Promise<void> {
    await page.getByTestId('password').fill(pass);
}

export async function fillBirthDate(page: Page, birthDate: Date): Promise<void> {
    await page.getByTestId('days').selectOption(birthDate.toLocaleString("default", {day: "2-digit"}));
    await page.getByTestId('months').selectOption(birthDate.toLocaleString('default', {month: "long"}));
    await page.getByTestId('years').selectOption(birthDate.toLocaleString('default', {year: "numeric"}));
}

export async function fillFirstNaame(page: Page, firstName: string): Promise<void> {
    await page.getByTestId('first_name' ).fill(firstName);
}

export async function fillLastname(page: Page, lastName: string): Promise<void> {
  await page.getByTestId('last_name').fill(lastName);
}

export async function fillAddress(page: Page, address:  Address): Promise<void> {
    await page.getByTestId('address').fill(address.street);
    await page.getByTestId('country').selectOption(address.country);
    await page.getByTestId('state').fill(address.state);
    await page.getByTestId('city').fill(address.city);
    await page.getByTestId('zipcode').fill(address.zip);
}

export async function fillMobile(page: Page, mobileNumber: string): Promise<void> {
    await page.getByTestId('mobile_number').fill(mobileNumber);
}

export async function createUser(page: Page): Promise<void> {
    await page.getByTestId('create-account').click();
}
