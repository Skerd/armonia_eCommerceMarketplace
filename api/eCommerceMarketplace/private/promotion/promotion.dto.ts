import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";
import type {PromotionLifecycleStatus, PromotionType} from "./promotion.schema-def";

export type Promotion = DeletedData & OwnershipData & {
    _id: string;
    name: string;
    listing?: {
        _id: string;
        name?: string;
        title?: string;
        status?: string
    };
    type: PromotionType;
    lifecycleStatus?: PromotionLifecycleStatus;
    stopReason?: string;
    startAt: Date | string;
    endAt: Date | string;
};
