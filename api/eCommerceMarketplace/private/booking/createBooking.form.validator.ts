import {isObjectIdZod, notEmptyZod} from "../../../../../core/helpers/zodBuilder";
import {z} from "zod";

/**
 * Create payload uses orderId (not order ref) and ISO date strings — hand-written Zod; see booking.schema-def.
 */
export function createBookingFormSchema(languageCode: string, form: any = null) {
    return z.object({
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode),
        startAt: notEmptyZod(form?.["startAtLabel"] ?? "startAt", languageCode),
        endAt: notEmptyZod(form?.["endAtLabel"] ?? "endAt", languageCode),
        timezone: z.string().max(100).optional(),
    });
}
