import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {z} from "zod";

/**
 * startAt / endAt are Date in Mongoose — validated here as ISO strings, not via SchemaDef builder.
 */
export function editBookingFormSchema(
    languageCode: string,
    form: any = null,
    _permissions: Record<string, unknown> = {},
    _readPermissions: Record<string, unknown> = {},
) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        startAt: z.string().optional(),
        endAt: z.string().optional(),
        timezone: z.string().max(100).optional(),
    });
}
