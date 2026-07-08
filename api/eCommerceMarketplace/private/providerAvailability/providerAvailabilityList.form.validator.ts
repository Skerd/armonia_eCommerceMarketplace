import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function providerAvailabilityListFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withTableFormValidator(languageCode, form, {
        providerId: isObjectIdZod(form?.["providerIdLabel"] ?? "providerId", lc).optional(),
    });
}
