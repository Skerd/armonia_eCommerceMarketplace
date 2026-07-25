import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingCategorySchemaDef} from "./listingCategory.schema-def";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function createListingCategoryFormSchema(languageCode: string, form: any = null) {
    const base = buildCreateZodSchema(ListingCategorySchemaDef, languageCode, form);
    return base
        .extend({
            parentId: isObjectIdZod(form?.["parentIdLabel"] ?? "parentId", languageCode).optional(),
        })
        .omit({parent: true});
}
