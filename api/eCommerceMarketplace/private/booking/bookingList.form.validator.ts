import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function bookingListFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode).optional(),
        providerId: isObjectIdZod(form?.["providerIdLabel"] ?? "providerId", languageCode).optional(),
    });
}
