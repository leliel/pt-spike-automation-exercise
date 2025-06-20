import { Page, Locator } from '@playwright/test';

export class HomePage{
    page;

    constructor(page: Page) {
        this.page = page;
    }
 
    getAddToCartButton(filterText: string): Locator {
        return this.page.getByRole("listitem")
            .filter({hasText: filterText})
            .getByRole("link", {name: "Add to Cart"})
    }

    getContinueShoppingButton(): Locator {
        return this.page.getByRole("button", {name: "Continue Shopping"});
    }

    getViewCartLink(): Locator {
        return this.page.getByRole("link", {name: "View Cart"});
    }
}