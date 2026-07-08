import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {ReviewSchemaDef} from "./review.schema-def";

const CreateReviewFieldsSchemaDef = {
    rating: ReviewSchemaDef.rating,
    comment: ReviewSchemaDef.comment,
} as const;

export function createReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CreateReviewFieldsSchemaDef, languageCode, form);
}
