import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type ListingPackage = OwnershipData & DeletedData & {
    _id: string;
    listing?: {
        _id: string;
        title?: string;
    };
    name: string;
    description?: string;
    price: {
        amount: number;
        currency: {
            _id: string;
            name?: string;
            symbol?: string;
            abbreviation?: string;
        };
    };
    deliveryDays: number;
    order: number;
};
