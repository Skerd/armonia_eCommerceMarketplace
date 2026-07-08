import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const disputeStatuses = ["open", "under_review", "resolved", "closed"] as const;
export type DisputeStatus = (typeof disputeStatuses)[number];

export const DisputeSchemaDef = {
    order: {type: "objectId", required: true},
    reason: {type: "string", required: true, max: 2000},
    // status: {type: "enum", required: false, options: disputeStatuses},
    resolution: {type: "string", required: false, max: 2000},
} as const;

export type CreateDisputeFormType = Omit<InferCreateForm<typeof DisputeSchemaDef>, "order"> & {
    orderId: string;
};
