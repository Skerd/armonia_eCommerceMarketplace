import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

/**
 * `reason` / `status` use enum in Mongoose — Zod validators enforce allowed values; omit from validateSchemaDefAgainstMongoose alignment.
 */
export const ListingFlagSchemaDef = {
    listing: {type: "objectId", required: true},
    user: {type: "objectId", required: true},
    comment: {type: "string", required: false},
    resolution: {type: "string", required: false},
} as const;

export type CreateListingFlagFormType = Omit<InferCreateForm<typeof ListingFlagSchemaDef>, "listing" | "user" | "company"> & {
    listingId: string;
    reason: "inappropriate" | "spam" | "misleading" | "other";
    comment?: string;
};

export type UpdateListingFlagFormType = {
    _id: string;
    reason: "inappropriate" | "spam" | "misleading" | "other";
    comment?: string;
};

export type ResolveListingFlagActionFormType = {
    _id: string;
    resolution: string;
    listingAction?: "none" | "deactivate";
};
