import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {z} from "zod";

export type RequestRevisionFormType = {
    _id: string;
    reason: string;
};

export function requestRevisionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        reason: z.string().min(10).max(2000),
    });
}
