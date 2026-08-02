import type {ZodObject} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {dateAfterFieldZod} from "../../../../../core/helpers/zodBuilder";
import {BookingSchemaDef} from "./booking.schema-def";

const CreateBookingSchemaDef = {
    order: BookingSchemaDef.order,
    startAt: BookingSchemaDef.startAt,
    endAt: BookingSchemaDef.endAt,
    timezone: BookingSchemaDef.timezone,
} as const;

export function createBookingFormSchema(languageCode: string, form: any = null): ZodObject<any> {
    return dateAfterFieldZod("endAt", "startAt", languageCode, {
        dateField: form?.["endAtLabel"] ?? "endAt",
        otherField: form?.["startAtLabel"] ?? "startAt",
    })(buildCreateZodSchema(CreateBookingSchemaDef, languageCode, form)) as ZodObject<any>;
}
