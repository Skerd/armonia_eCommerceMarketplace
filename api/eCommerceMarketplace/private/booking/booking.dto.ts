import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";

/** API / panel type for a Booking (populated refs). */
export type Booking = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: {
        _id: string;
        status?: string
    };
    provider?: {
        _id: string;
        name: string;
        surname: string;
    };
    startAt: Date | string;
    endAt: Date | string;
    timezone: string;
};
