# eCommerce Marketplace Module

Shared types, schema definitions, and Zod validators for the Arpeggio marketplace layer — a peer-to-peer / services marketplace built on top of core commerce primitives.

Consumed by **maestro** (API + database) and **sinfonia** (provider and buyer UI).

Enable at runtime via `ENABLED_MODULES` (maestro) or `VITE_ENABLED_MODULES` (sinfonia). Add `eCommerceMarketplace` to the module list.

## Scope

Listings, provider profiles, bidding, bookings, marketplace orders, reviews, disputes, and promotions. Complements the **eCommerce** module for traditional catalog commerce.

## Directory layout

```
eCommerceMarketplace/
├── api/eCommerceMarketplace/private/<resource>/
└── helpers/static/
    ├── exceptions/
    └── zod/
```

## API domains

| Resource | Description |
|----------|-------------|
| `listing` | Marketplace listings (services, gigs, rentals, etc.) |
| `listingPackage` / `listingAddOn` | Bundled offerings and optional add-ons |
| `listingFlag` | Moderation flags on listings |
| `providerProfile` / `providerAvailability` | Seller/provider identity and scheduling |
| `taskRequest` / `bid` | Buyer requests and provider bids |
| `booking` | Scheduled appointments or reservations |
| `order` | Marketplace order lifecycle |
| `review` | Buyer/seller reviews and ratings |
| `dispute` | Dispute resolution |
| `promotion` | Marketplace-specific promotions |

## File conventions

Same Armonia patterns as core and eCommerce:

- `*.dto.ts` — shared document types
- `*.schema-def.ts` — single source of truth for field validation
- `*.form.validator.ts` — Zod schemas generated from schema-defs
- `*.form.type.ts` — typed form inputs and responses

See the [core README](../../../README.md) for details on `schemaDefBuilder` and `zodBuilder`.

## Example import

```ts
import {ListingSchemaDef} from "armonia/src/modules/eCommerceMarketplace/api/eCommerceMarketplace/private/listing/listing.schema-def";
import type {Listing} from "armonia/src/modules/eCommerceMarketplace/api/eCommerceMarketplace/private/listing/listing.dto";
```

## Backend counterpart

Mongoose models and routes: `maestro/modules/eCommerceMarketplace/`. Models are registered in `maestro/modules/eCommerceMarketplace/database/moduleBootstrap.ts`.

## Frontend counterpart

Panel and storefront contributions: `sinfonia/src/modules/eCommerceMarketplace/`.

## Relationship to eCommerce

Use **eCommerce** for standard product catalog, cart, and warehouse flows. Use **eCommerceMarketplace** when the business model involves listings, providers, bids, bookings, or marketplace-specific order/dispute flows. Both modules can be enabled together.
