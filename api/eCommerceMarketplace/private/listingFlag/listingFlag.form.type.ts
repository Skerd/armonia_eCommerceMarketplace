import {TableForm} from "../../../../../core/types/shared.types";

export type ListingFlagListParams = TableForm & {
    id?: string;
    listingId?: string;
    status?: "pending" | "reviewed" | "dismissed";
};
