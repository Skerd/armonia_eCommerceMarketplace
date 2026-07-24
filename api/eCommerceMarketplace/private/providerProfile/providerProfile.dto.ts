import {Media} from "../../../../../core/types";

export type ProviderProfile = {
    _id?: string;
    user: {
        _id: string;
        name?: string;
        surname?: string;
        photo?: string;
        fullName?: string;
    };
    skills?: string[];
    bio?: string;
    portfolio?: Media[],
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
