import { Page} from '@playwright/test';

export async function addProductToCart(page: Page, name: string): Promise<void> {
    await page.getByText(name).first().hover();
    await page.locator('.overlay-content > .btn').first().click();
}

export async function clickContinueShoppingButton(page: Page): Promise<void> {
    await page.getByRole("button", {name: "Continue Shopping"}).click();
}

export async function clickViewCartLink(page: Page): Promise<void> {
    await page.getByRole("link", {name: "View Cart"}).click();
}

export async function clickCartLink(page: Page): Promise<void> {
    await page.getByRole("link", {name: "Cart"}).click();
}

export async function clickDeleteAccountButton(page: Page): Promise<void> {
    await page.getByRole('link', { name: 'Delete Account' }).click();
}