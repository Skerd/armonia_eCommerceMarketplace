import type { Media } from "../../../../../core/types";
import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";

export type TaskRequest = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    requester?: {
        _id: string;
        name: string;
        surname: string;
        photo?: string;
    };
    name: string;
    title: string;
    description: string;
    category?: {
        _id: string;
        name: string;
    };
    budgetMin?: number;
    budgetMax?: number;
    currency?: {
        _id: string;
        name: string;
        symbol: string;
        abbreviation: string;
    };
    address?: {
        street?: string;
        postalCode?: string;
        country?: {
            _id: string;
            name: string;
        };
        state?: {
            _id: string;
            name: string;
        };
        city?: {
            _id: string;
            name: string;
        };
        latitude?: number;
        longitude?: number;
    };
    expiresAt?: string;
    status: "open" | "closed" | "awarded";
    mainImage?: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    bidCount?: number;
};
