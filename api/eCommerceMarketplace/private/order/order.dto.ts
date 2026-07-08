import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";
import type {OrderStatus} from "./order.schema-def";
import {BidStatus} from "../bid/bid.dto";
import {TaskRequest} from "../taskRequest/taskRequest.dto";
import {TaskRequestStatus} from "../taskRequest/taskRequest.schema-def";
import {ListingStatus} from "../listing/listing.schema-def";

export type {OrderStatus} from "./order.schema-def";

export type Order = OwnershipData & DeletedData & {
    _id: string;
    name: string;
    listing?: {
        _id: string;
        name: string;
        title: string;
        status: ListingStatus;
    };
    taskRequest?: {
        _id: string;
        title: string;
        name: string;
        status: TaskRequestStatus;
    };
    bid?: {
        _id: string;
        name: string;
        amount: number;
        status: BidStatus;
    };
    customer?: {
        _id: string;
        name: string;
        surname: string;
        photo: string;
    };
    provider?: {
        _id: string;
        name: string;
        surname: string;
        photo: string;
    };
    amount?: number;
    currency?: {
        _id: string;
        name: string;
        symbol: string;
        abbreviation: string;
    };
    status?: OrderStatus;
    deliveryDueDate?: Date | string;
    /** True when the provider has submitted a delivery awaiting customer acceptance. */
    deliverySubmitted?: boolean;
    /** True when an open dispute exists on this order (blocks delivery acceptance etc.). */
    hasActiveDispute?: boolean;
};

export type OrderListResponse = {
    data: Order[];
    total: number;
};
