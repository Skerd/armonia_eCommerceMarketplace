import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";

export type Review = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: {
        _id: string;
        name?: string;
        status?: string;
        amount?: number;
        currency?: {
            _id: string;
            symbol?: string;
            abbreviation?: string;
        };
        taskRequest?: {
            _id: string;
            name?: string;
            title?: string;
            status?: string;
        };
        listing?: {
            _id: string;
            name?: string;
            title?: string;
            status?: string;
        };
    };
    listing?: {_id: string; title?: string};
    rating: number;
    comment?: string;
    reviewer?: {
        _id: string;
        name?: string;
        surname?: string;
        photo?: string;
    };
};

export type ReviewListResponse = {
    data: Review[];
    total: number;
};

export type ListingReviewsSummary = {
    averageRating: number;
    reviewCount: number;
};
