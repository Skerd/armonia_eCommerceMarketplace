import {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";

export type ListingFlagReason = "inappropriate" | "spam" | "misleading" | "other";

export type ListingFlagStatus = "pending" | "reviewed" | "dismissed";

export type ListingFlag = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    listing?: {
        _id: string;
        name?: string;
        title?: string;
        status?: string;
    };
    user?: {
        _id: string;
        name?: string;
        surname?: string
        photo?: string;
    };
    reason: ListingFlagReason;
    comment?: string;
    status: ListingFlagStatus;
    resolution?: string;
};