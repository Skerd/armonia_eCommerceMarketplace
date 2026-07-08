import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

/**
 * startAt / endAt are Date in Mongoose — validated in create/edit Zod (ISO strings), omitted from SchemaDef alignment.
 * Create form uses orderId instead of order — see CreateBookingFormType.
 */
export const BookingSchemaDef = {
    order: {type: "objectId", required: true},
    provider: {type: "objectId", required: true},
    timezone: {type: "string", required: false},
} as const;

export type CreateBookingFormType = Omit<InferCreateForm<typeof BookingSchemaDef>, "company" | "provider" | "order"> & {
    orderId: string;
    startAt: string;
    endAt: string;
    timezone?: string;
};

export type EditBookingFormType = {
    _id: string;
    startAt?: string;
    endAt?: string;
    timezone?: string;
};

/** @deprecated Use EditBookingFormType */
export type UpdateBookingFormType = EditBookingFormType;
