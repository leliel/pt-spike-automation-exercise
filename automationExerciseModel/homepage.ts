import { Page, Locator } from '@playwright/test';

export class HomePage{
    page;

    constructor(page: Page) {
        this.page = page;
    }

    getAddToCartButton(): Locator {
        return this.page.locator('.overlay-content > .btn').first();
    }

    getContinueShoppingButton(): Locator {
        return this.page.getByRole("button", {name: "Continue Shopping"});
    }

    getViewCartLink(): Locator {
        return this.page.getByRole("link", {name: "View Cart"});
    }
}