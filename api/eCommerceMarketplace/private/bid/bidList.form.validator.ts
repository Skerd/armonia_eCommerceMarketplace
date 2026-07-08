import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function bidListFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withTableFormValidator(languageCode, form, {});
}
