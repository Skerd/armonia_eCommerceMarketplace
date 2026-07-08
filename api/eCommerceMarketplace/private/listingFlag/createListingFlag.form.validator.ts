import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function createListingFlagFormSchema(languageCode: string, form: any = null) {
    return z.object({
        listingId: isObjectIdZod(form?.["listingIdLabel"] ?? "listingId", languageCode),
        reason: z.enum(["inappropriate", "spam", "misleading", "other"]),
        comment: z.string().max(2000).optional(),
    });
}
