import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** `user` is set server-side from the authenticated user — excluded from forms. */
export const ProviderProfileSchemaDef = {
    skills: {type: "stringArray", required: false},
    bio: {type: "string", required: false},
    portfolio: {type: "objectIdArray", required: false},
} as const;

export type CreateProviderProfileFormType = InferCreateForm<typeof ProviderProfileSchemaDef>;
export type EditProviderProfileFormType = InferEditForm<typeof ProviderProfileSchemaDef>;
