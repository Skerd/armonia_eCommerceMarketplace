import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProviderAvailabilitySchemaDef} from "./providerAvailability.schema-def";

export function editProviderAvailabilityFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(ProviderAvailabilitySchemaDef, languageCode, form, permissions, readPermissions);
}
