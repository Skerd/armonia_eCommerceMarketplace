import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {OrderSchemaDef, EditOrderStatus} from "./order.schema-def";
import {z} from "zod";

export type EditOrderFormType = {_id: string; status: EditOrderStatus};

export function editOrderFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(OrderSchemaDef, languageCode, form, permissions, readPermissions)
        .extend({
            _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
            // status is a Mongoose enum — not expressible in SchemaDef, added manually
            status: z.enum(["accepted", "in_progress", "cancelled"]),
        });
}
