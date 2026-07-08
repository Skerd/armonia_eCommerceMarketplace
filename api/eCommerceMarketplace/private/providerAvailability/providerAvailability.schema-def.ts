import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** `provider` is set server-side from the authenticated user — excluded from forms. */
export const ProviderAvailabilitySchemaDef = {
    dayOfWeek: {type: "number", required: true, min: 0, max: 6},
    startTime: {type: "string", required: true},
    endTime: {type: "string", required: true},
    timezone: {type: "string", required: false},
} as const;

export type CreateProviderAvailabilityFormType = InferCreateForm<typeof ProviderAvailabilitySchemaDef>;
export type EditProviderAvailabilityFormType = InferEditForm<typeof ProviderAvailabilitySchemaDef>;
