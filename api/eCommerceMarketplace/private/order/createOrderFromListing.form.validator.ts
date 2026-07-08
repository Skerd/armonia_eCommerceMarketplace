import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {z} from "zod";

export type CreateOrderFromListingFormType = {
    listingId: string;
    packageId?: string;
    addOnIds?: string[];
    note?: string;
};

export function createOrderFromListingFormSchema(languageCode: string, form: any = null) {
    return z.object({
        listingId: isObjectIdZod(form?.["listingIdLabel"] ?? "listingId", languageCode),
        packageId: isObjectIdZod(form?.["packageIdLabel"] ?? "packageId", languageCode).optional(),
        addOnIds: z
            .array(isObjectIdZod(form?.["addOnIdsLabel"] ?? "addOnIds", languageCode))
            .optional(),
        note: z.string().max(1000).optional(),
    });
}
