import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const promotionTypes = ["featured", "sponsored"] as const;
export type PromotionType = (typeof promotionTypes)[number];

export const promotionLifecycleStatuses = ["active", "paused", "stopped"] as const;
export type PromotionLifecycleStatus = (typeof promotionLifecycleStatuses)[number];

export const PromotionSchemaDef = {
    listing: {type: "objectId", required: true},
    type: {type: "enum", required: false, options: promotionTypes},
    startAt: {type: "date", required: true},
    endAt: {type: "date", required: true},
    // lifecycleStatus: {type: "enum", required: false, options: promotionLifecycleStatuses},
    // stopReason: {type: "string", required: false, max: 2000},
} as const;

export type CreatePromotionFormType = InferCreateForm<typeof PromotionSchemaDef>;
export type EditPromotionFormType = InferEditForm<typeof PromotionSchemaDef>;
