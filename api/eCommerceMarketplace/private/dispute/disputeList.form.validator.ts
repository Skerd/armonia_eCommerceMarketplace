import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function disputeListFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {});
}
