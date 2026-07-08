import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ReviewSchemaDef = {
    order: {type: "objectId", required: true},
    listing: {type: "objectId", required: true},
    rating: {type: "number", required: true, min: 1, max: 5},
    comment: {type: "string", required: false},
    reviewer: {type: "objectId", required: true},
} as const;

export type CreateReviewFormType = Omit<InferCreateForm<typeof ReviewSchemaDef>, "order" | "listing" | "reviewer"> & {
    orderId: string;
};
