import type {Media} from "../../../../../core/types";
import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ListingAddOn} from "../listingAddOn/listingAddOn.dto";
import type {ListingPackage} from "../listingPackage/listingPackage.dto";

export type Listing = DeletedData & OwnershipData & {
    _id: string;
    name: string;
    title: string;
    description?: string;
    category?: {
        _id: string;
        name: string;
    };
    provider?: {
        _id: string;
        name: string;
        surname: string;
    };
    price?: number;
    priceCurrency?: {
        _id: string;
        name: string;
        symbol: string;
        abbreviation: string;
    };
    pricingType?: "fixed" | "hourly";
    deliveryDays?: number;
    address?: {
        country?: {
            _id: string;
            name?: string;
        };
        state?: {
            _id: string;
            name?: string;
        };
        city?: {
            _id: string;
            name?: string
        };
    };
    status?: string;
    mainImage?: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    faqs?: {question: string; answer: string}[];
    requirements?: string[];
    tags?: string[];
    promotions?: {
        _id: string;
        name: string;
        type: "featured" | "sponsored";
        startAt: Date | string;
        endAt: Date | string;
    }[];
    avgRating?: number;
    reviewCount?: number;
    listingAddOns?: ListingAddOn[];
    listingPackages?: ListingPackage[];
};
