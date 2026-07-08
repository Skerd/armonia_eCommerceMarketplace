import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProviderAvailabilitySchemaDef} from "./providerAvailability.schema-def";

export function createProviderAvailabilityFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProviderAvailabilitySchemaDef, languageCode, form);
}
