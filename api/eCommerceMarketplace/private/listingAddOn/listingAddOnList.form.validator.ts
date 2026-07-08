import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function listingAddOnListFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withTableFormValidator(languageCode, form, {
        listingId: isObjectIdZod(form?.["listingIdLabel"] ?? "listingId", lc).optional(),
    });
}
