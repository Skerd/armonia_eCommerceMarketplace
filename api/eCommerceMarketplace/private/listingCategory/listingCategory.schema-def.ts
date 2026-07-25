import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ListingCategorySchemaDef = {
    name: {type: "string", required: true},
    slug: {type: "string", required: false, format: "slug"},
    parent: {type: "objectId", required: false},
    order: {type: "number", required: false, min: 0},
} as const;

export type CreateListingCategoryFormType = InferCreateForm<typeof ListingCategorySchemaDef> & {
    parentId?: string;
};

export type EditListingCategoryFormType = InferEditForm<typeof ListingCategorySchemaDef>;
