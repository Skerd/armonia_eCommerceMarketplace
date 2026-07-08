import {Media} from "../../../../../core/types";

export type ProviderProfile = {
    _id?: string;
    user: {
        _id: string;
        name?: string;
        surname?: string;
        photo?: string;
    };
    skills?: string[];
    bio?: string;
    portfolio?: Media[],
    averageRating?: number;
    reviewCount?: number;
    completionRate?: number;
};
