import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {z} from "zod";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function listingFlagListFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withTableFormValidator(languageCode, form, {
        id: isObjectIdZod(form?.["idLabel"] ?? "id", lc).optional(),
        listingId: isObjectIdZod(form?.["listingIdLabel"] ?? "listingId", lc).optional(),
        status: z.enum(["pending", "reviewed", "dismissed"]).optional(),
    });
}
