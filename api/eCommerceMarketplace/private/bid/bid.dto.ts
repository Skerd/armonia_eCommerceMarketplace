import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type BidStatus = "pending" | "accepted" | "rejected";

export type Bid = OwnershipData & DeletedData & {
    _id: string;
    listing?: {
        _id: string;
        title?: string;
    };
    taskRequest: {
        _id: string;
        name?: string;
        title?: string;
    };
    name: string;
    bidder: {
        _id: string;
        name?: string;
        surname?: string;
        photo?: string;
    };
    amount: number;
    currency: {
        _id: string;
        name?: string;
        symbol?: string;
        abbreviation?: string;
    };
    proposal: string;
    deliveryDays: number;
    status: BidStatus;
};
