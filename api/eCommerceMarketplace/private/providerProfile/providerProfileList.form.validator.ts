import {z} from "zod";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function providerProfileListFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {});
}
