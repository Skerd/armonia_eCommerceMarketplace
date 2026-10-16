import {registerRefSelects, type RefSelectConfig} from "../../../core/database/filter/refSelectRegistry";

/**
 * Mongoose `ref` name → select endpoint. Same contract as ecommerce:
 * objectId filters with an `apiUrl` render as ApiSelect.
 * Order delivery, milestone, and revision have no select route.
 */
export const ECOMMERCE_MARKETPLACE_REF_SELECTS: Record<string, RefSelectConfig> = {
    Booking: {apiUrl: "/api/eCommerceMarketplace/booking/select"},
    Dispute: {apiUrl: "/api/eCommerceMarketplace/dispute/select"},
    Listing: {apiUrl: "/api/eCommerceMarketplace/listing/select"},
    ListingAddOn: {apiUrl: "/api/eCommerceMarketplace/listingAddOn/select"},
    ListingCategory: {apiUrl: "/api/eCommerceMarketplace/listingCategory/select"},
    ListingFlag: {apiUrl: "/api/eCommerceMarketplace/listingFlag/select"},
    ListingPackage: {apiUrl: "/api/eCommerceMarketplace/listingPackage/select"},
    MarketplaceBid: {apiUrl: "/api/eCommerceMarketplace/bid/select"},
    Order: {apiUrl: "/api/eCommerceMarketplace/order/select"},
    Promotion: {apiUrl: "/api/eCommerceMarketplace/promotion/select"},
    ProviderProfile: {apiUrl: "/api/eCommerceMarketplace/providerProfile/select"},
    Review: {apiUrl: "/api/eCommerceMarketplace/review/select"},
    TaskRequest: {apiUrl: "/api/eCommerceMarketplace/taskRequest/select"},
};

export function registerECommerceMarketplaceRefSelects(): void {
    registerRefSelects(ECOMMERCE_MARKETPLACE_REF_SELECTS);
}

/** Side-effect: Maestro `addModelData` snapshots table configs at model import. */
registerECommerceMarketplaceRefSelects();
