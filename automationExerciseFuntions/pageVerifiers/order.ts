import { expect, Locator, Page } from "@playwright/test";
import { Address } from "../userGenerator";

export function locateAddressBlock(page: Page, title: string, delivery: boolean): Locator {
    return page.getByText(`Your ${delivery ? "delivery" : "billing"} address ${title}`);
}

export async function verifyAddress(addressLocator: Locator, address: Address, fullname: string): Promise<void> {
    await expect(addressLocator.getByText(fullname)).toBeVisible();
    await expect(addressLocator.getByText(address.street)).toBeVisible();
    await expect(addressLocator.getByText(address.zip)).toBeVisible();
    await expect(addressLocator.getByText(address.country)).toBeVisible();
    await expect(addressLocator.getByText(`${address.city} ${address.state}`)).toBeVisible();
}