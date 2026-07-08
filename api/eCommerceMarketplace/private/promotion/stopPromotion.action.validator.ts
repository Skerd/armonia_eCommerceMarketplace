import type {ZodObject} from "zod";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {getValidationMessage, notEmptyZod} from "../../../../../core/helpers/zodBuilder";

const STOP_REASON_MAX = 2000;

/** Body for POST /api/eCommerceMarketplace/promotion/stop — audit trail requires a non-empty reason (max length after trim aligns with Mongoose trim+maxlength). */
export function validatePromotionStopForm(languageCode: string, form: any = null): ZodObject<any> {
    const lc = languageCode ?? "";
    const lbl = form?.["stopReasonLabel"] ?? "stopReason";
    const maxMessage = getValidationMessage("string", "maxLength", [lbl, String(STOP_REASON_MAX)], lc);

    return validateSingleForm(languageCode, form).extend({
        stopReason: notEmptyZod(lbl, lc).refine((v: string) => v.trim().length <= STOP_REASON_MAX, {message: maxMessage}),
    }) as ZodObject<any>;
}
