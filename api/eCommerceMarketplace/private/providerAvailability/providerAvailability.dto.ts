export type ProviderAvailability = {
    _id: string;
    provider?: {_id: string; name?: string; fullName?: string};
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    timezone: string;
};

export type ProviderAvailabilityListResponse = {
    data: ProviderAvailability[];
    total: number;
};
