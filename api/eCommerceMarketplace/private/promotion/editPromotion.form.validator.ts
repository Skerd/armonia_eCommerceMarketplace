import type {ZodObject} from "zod";
import {buildPromotionEditSchema} from "./promotionDateRange.refine";

export function editPromotionFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {},): ZodObject<any> {
    return buildPromotionEditSchema(languageCode, form, permissions, readPermissions);
}
