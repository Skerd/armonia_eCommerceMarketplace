import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ListingSimple} from "../../../../dto/listing.dto";

export type ListingFlagReason = "inappropriate" | "spam" | "misleading" | "other";

export type ListingFlagStatus = "pending" | "reviewed" | "dismissed";

export type ListingFlag = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    listing?: ListingSimple;
    user?: SimpleUser;
    reason: ListingFlagReason;
    comment?: string;
    status: ListingFlagStatus;
    resolution?: string;
};
