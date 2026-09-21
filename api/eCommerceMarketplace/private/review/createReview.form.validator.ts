import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ReviewSchemaDef} from "./review.schema-def";

const CreateReviewFieldsSchemaDef = {
    rating: ReviewSchemaDef.rating,
    comment: ReviewSchemaDef.comment,
} as const;

export function createReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CreateReviewFieldsSchemaDef, languageCode, form);
}
