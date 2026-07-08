import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";
import type {DisputeStatus} from "./dispute.schema-def";

export type Dispute = OwnershipData & DeletedData & {
    _id: string;
    order?: {
        _id: string;
        name?: string;
        status?: string
        amount?: number;
        currency?: {
            _id: string,
            name?: string,
            symbol?: string,
            abbreviation?: string
        },
        taskRequest?: {
            _id: string,
            name?: string,
            title?: string,
            status?: string,
        },
        listing?: {
            _id: string,
            name?: string,
            title?: string,
            status?: string,
        }
    };
    initiator?: {
        _id: string;
        name?: string;
        surname?: string;
        photo?: string;
    };
    reason: string;
    status: DisputeStatus;
    resolution?: string;
};

export type DisputeListResponse = {
    data: Dispute[];
    total: number;
};
