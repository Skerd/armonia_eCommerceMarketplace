import type {ZodObject} from "zod";
import {dateAfterFieldZod} from "../../../../../core/helpers/zodBuilder";
import {PromotionSchemaDef} from "./promotion.schema-def";
import {buildCreateZodSchema, buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";

/** Apply end-after-start validation; cast for CRUD router `ZodObject` contract. */
export function withPromotionEndAfterStart<T extends ZodObject<any>>(
    schema: T,
    languageCode: string,
    form?: any,
): ZodObject<any> {
    return dateAfterFieldZod("endAt", "startAt", languageCode, {
        dateField: form?.["endAtLabel"] ?? "endAt",
        otherField: form?.["startAtLabel"] ?? "startAt",
    })(schema) as ZodObject<any>;
}

export function buildPromotionCreateSchema(languageCode: string, form?: any) {
    return withPromotionEndAfterStart(
        buildCreateZodSchema(PromotionSchemaDef, languageCode, form),
        languageCode,
        form,
    );
}

export function buildPromotionEditSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return withPromotionEndAfterStart(
        buildEditZodSchema(PromotionSchemaDef, languageCode, form, permissions, readPermissions),
        languageCode,
        form,
    );
}
