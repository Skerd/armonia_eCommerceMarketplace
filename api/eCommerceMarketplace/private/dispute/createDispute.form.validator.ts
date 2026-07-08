import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {DisputeSchemaDef} from "./dispute.schema-def";

const CreateReasonSchemaDef = {reason: DisputeSchemaDef.reason} as const;

export function createDisputeFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CreateReasonSchemaDef, languageCode, form).extend({
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode),
    });
}
