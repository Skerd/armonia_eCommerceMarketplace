import type {ZodObject} from "zod";
import {z} from "zod";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {getValidationMessage, notEmptyZod} from "../../../../../core/helpers/zodBuilder";

const RESOLUTION_MAX = 2000;

/** Body for POST /api/eCommerceMarketplace/listingFlag/resolve and /dismiss */
export function resolveListingFlagActionFormSchema(languageCode: string, form: any = null): ZodObject<any> {
    const lc = languageCode ?? "";
    const lbl = form?.["resolutionLabel"] ?? "resolution";
    const maxMessage = getValidationMessage("string", "maxLength", [lbl, String(RESOLUTION_MAX)], lc);

    return validateSingleForm(languageCode, form).extend({
        resolution: notEmptyZod(lbl, lc).refine((v: string) => v.trim().length <= RESOLUTION_MAX, {message: maxMessage}),
        listingAction: z.enum(["none", "deactivate"]).optional(),
    }) as ZodObject<any>;
}
