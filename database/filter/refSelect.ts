import {registerRefSelects, type RefSelectConfig} from "../../../core/database/filter/refSelectRegistry";

export const ECOMMERCE_MARKETPLACE_REF_SELECTS = {
    ListingCategory: {apiUrl: "/api/eCommerceMarketplace/listingCategory/select"},
} as const satisfies Record<string, RefSelectConfig>;

export function registerECommerceMarketplaceRefSelects(): void {
    registerRefSelects(ECOMMERCE_MARKETPLACE_REF_SELECTS);
}

/** Side-effect: Maestro `addModelData` snapshots table configs at model import. */
registerECommerceMarketplaceRefSelects();
