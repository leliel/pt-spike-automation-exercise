import { Page } from "@playwright/test";

export async function clickContinue(page: Page): Promise<void> {
    return page.getByTestId('continue-button').click();
}