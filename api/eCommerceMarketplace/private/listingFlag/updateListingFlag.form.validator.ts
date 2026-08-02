import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function updateListingFlagFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        reason: z.enum(["inappropriate", "spam", "misleading", "other"]),
        comment: z.string().max(2000).optional(),
    });
}
