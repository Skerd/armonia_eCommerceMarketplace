import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";

export type ListingAddOn = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    listing?: {
        _id: string;
        title?: string;
    };
    provider?: {
        _id: string;
        name: string;
        surname: string;
    };
    name: string;
    price: {
        amount: number;
        currency: {
            _id: string;
            name?: string;
            symbol?: string;
            abbreviation?: string;
        };
    };
    deliveryDays?: number;
};
