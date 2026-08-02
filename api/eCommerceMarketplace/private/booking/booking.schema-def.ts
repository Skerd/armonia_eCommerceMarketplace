import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const BookingSchemaDef = {
    order: {type: "objectId", required: true},
    provider: {type: "objectId", required: true},
    startAt: {type: "date", required: true},
    endAt: {type: "date", required: true},
    timezone: {type: "string", required: false, max: 100},
} as const;

export type CreateBookingFormType = Omit<InferCreateForm<typeof BookingSchemaDef>, "provider">;
export type EditBookingFormType = InferEditForm<Pick<typeof BookingSchemaDef, "startAt" | "endAt" | "timezone">>;
