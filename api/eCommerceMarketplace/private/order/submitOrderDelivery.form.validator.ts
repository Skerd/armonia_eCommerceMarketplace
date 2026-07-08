import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {z} from "zod";

export type SubmitOrderDeliveryFormType = {
    _id: string;
    message?: string;
    attachmentIds?: string[];
};

export function submitOrderDeliveryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        message: z.string().optional(),
        attachmentIds: z
            .array(isObjectIdZod(form?.["attachmentIdsLabel"] ?? "attachmentIds", languageCode))
            .optional(),
    });
}
