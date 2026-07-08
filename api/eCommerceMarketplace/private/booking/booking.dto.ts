import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

/** API / panel type for a Booking (populated refs). */
export type Booking = OwnershipData & DeletedData & {
    _id: string;
    order?: {_id: string; status?: string};
    provider?: {_id: string; name?: string; fullName?: string};
    startAt: Date | string;
    endAt: Date | string;
    timezone: string;
};
