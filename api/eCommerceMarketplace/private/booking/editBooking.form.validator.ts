import type {ZodObject} from "zod";
import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {dateAfterFieldZod} from "../../../../../core/helpers/zodBuilder";
import {BookingSchemaDef} from "./booking.schema-def";

const EditBookingSchemaDef = {
    startAt: BookingSchemaDef.startAt,
    endAt: BookingSchemaDef.endAt,
    timezone: BookingSchemaDef.timezone,
} as const;

export function editBookingFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
): ZodObject<any> {
    return dateAfterFieldZod("endAt", "startAt", languageCode, {
        dateField: form?.["endAtLabel"] ?? "endAt",
        otherField: form?.["startAtLabel"] ?? "startAt",
    })(buildEditZodSchema(EditBookingSchemaDef, languageCode, form, permissions, readPermissions)) as ZodObject<any>;
}
