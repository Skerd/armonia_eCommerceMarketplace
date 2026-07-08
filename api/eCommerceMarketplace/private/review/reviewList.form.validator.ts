import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function reviewListFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withTableFormValidator(languageCode, form, {
        listingId: isObjectIdZod(form?.["listingIdLabel"] ?? "listingId", lc).optional(),
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", lc).optional(),
        comment: z.string().optional(),
        rating: z
            .union([
                z.coerce.number().int().min(1).max(5),
                z.array(z.coerce.number().int().min(1).max(5)),
            ])
            .optional(),
    });
}
