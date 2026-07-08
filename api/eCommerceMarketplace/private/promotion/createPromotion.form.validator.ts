import type {ZodObject} from "zod";
import {buildPromotionCreateSchema} from "./promotionDateRange.refine";

export function createPromotionFormSchema(languageCode: string, form?: any): ZodObject<any> {
    return buildPromotionCreateSchema(languageCode, form);
}
