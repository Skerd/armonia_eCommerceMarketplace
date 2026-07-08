import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import type {ZodObject} from "zod";

/** Disputes are not edited via PATCH; lifecycle uses `/startReview`, `/resolve`, `/close`. Body is `_id` only (router still registers PATCH like promotions). */
export function editDisputeFormSchema(
    languageCode: string | undefined,
    form: any = null,
    _permissions: Record<string, unknown> = {},
    _readPermissions: Record<string, unknown> = {},
): ZodObject<any> {
    return validateSingleForm(languageCode, form) as ZodObject<any>;
}
