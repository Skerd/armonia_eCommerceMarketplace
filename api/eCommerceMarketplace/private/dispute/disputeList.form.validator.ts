import {isObjectIdZod, mustBeZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {disputeStatuses} from "./dispute.schema-def";

export function disputeListFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withTableFormValidator(languageCode, form, {
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", lc).optional(),
        status: mustBeZod(form?.["statusLabel"] ?? "status", [...disputeStatuses], lc).optional(),
    });
}
