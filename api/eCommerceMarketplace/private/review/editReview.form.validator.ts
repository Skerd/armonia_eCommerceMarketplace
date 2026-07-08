import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import type {ZodObject} from "zod";

/** Reviews are not edited via PATCH; create-only with admin delete/restore. */
export function editReviewFormSchema(
    languageCode: string | undefined,
    form: any = null,
    _permissions: Record<string, unknown> = {},
    _readPermissions: Record<string, unknown> = {},
): ZodObject<any> {
    return validateSingleForm(languageCode, form) as ZodObject<any>;
}
