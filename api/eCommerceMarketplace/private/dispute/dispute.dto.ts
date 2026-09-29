import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {OrderWithTaskOrListing} from "../../../../dto/order.dto";
import type {DisputeStatus} from "./dispute.schema-def";

export type Dispute = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: OrderWithTaskOrListing;
    initiator?: SimpleUser;
    reason: string;
    status: DisputeStatus;
    resolution?: string;
};

export type DisputeListResponse = {
    data: Dispute[];
    total: number;
};
