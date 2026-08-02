import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function listingFlagListFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {});
}
