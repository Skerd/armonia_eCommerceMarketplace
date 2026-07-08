import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {z} from "zod";

const ExtendOrderSchemaDef = {
    additionalDays: {type: "number", required: true, min: 1, max: 90},
} as const;

export type ExtendOrderFormType = {_id: string; additionalDays: number};

export function extendOrderFormSchema(languageCode: string, form: any = null) {
    const extendFields = buildCreateZodSchema(ExtendOrderSchemaDef, languageCode, form);
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        additionalDays: extendFields.shape.additionalDays,
    });
}
