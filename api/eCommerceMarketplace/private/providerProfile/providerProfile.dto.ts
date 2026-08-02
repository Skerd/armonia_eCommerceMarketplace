import type {LifeCycleData} from "../../../../../core/types/shared.types";
import {Media} from "../../../../../core/types";

export type ProviderAvailabilitySlot = {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
};

export type ProviderProfile = LifeCycleData & {
    _id?: string;
    user: {
        _id: string;
        name?: string;
        surname?: string;
        photo?: string;
    };
    skills?: string[];
    bio?: string;
    portfolio?: Media[];
    /** Weekly recurring availability windows. */
    availability?: ProviderAvailabilitySlot[];
    averageRating?: number;
    reviewCount?: number;
    completionRate?: number;
    /** Stripe Connect Express — read-only; mutated via createAccountLink / refreshAccountStatus. */
    stripeAccountId?: string;
    stripeChargesEnabled?: boolean;
    stripePayoutsEnabled?: boolean;
    stripeDetailsSubmitted?: boolean;
    stripeAccountSyncedAt?: string;
};
