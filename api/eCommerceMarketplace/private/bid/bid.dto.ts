import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";

export type BidStatus = "pending" | "accepted" | "rejected";

export type Bid = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
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
