# eCommerce Marketplace Module

Shared types, schema definitions, and Zod validators for the Arpeggio marketplace layer.

Consumed by **maestro** (API + database) and **sinfonia** (panel UI).

Enable via `ENABLED_MODULES` / `VITE_ENABLED_MODULES` with `eCommerceMarketplace`.

## Directory layout

```
eCommerceMarketplace/
├── api/eCommerceMarketplace/private/<resource>/
│   ├── *.dto.ts
│   ├── *.schema-def.ts
│   └── *.form.validator.ts / *.form.type.ts
└── helpers/static/
    └── exceptions/
```

## API domains

| Resource | Description |
|----------|-------------|
| `listing` / `listingCategory` | Listings and taxonomy |
| `listingPackage` / `listingAddOn` / `listingFlag` | Packages, add-ons, flags |
| `providerProfile` | Provider identity, portfolio, and weekly availability |
| `taskRequest` / `bid` | Buyer requests and bids |
| `booking` | Appointments |
| `order` | Marketplace order lifecycle (+ action validators) |
| `orderDelivery` / `orderMilestone` / `orderRevision` | Order sub-documents (dto + schema-def) |
| `review` / `dispute` / `promotion` | Reviews, disputes, promotions |

## Escrow ownership

Escrow persistence and fee config live in **finance**. Marketplace OrderActions call finance helpers; they do not own `EscrowTransaction` contracts.

## Example import

```ts
import {ListingSchemaDef} from "armonia/src/modules/eCommerceMarketplace/api/eCommerceMarketplace/private/listing/listing.schema-def";
import type {Listing} from "armonia/src/modules/eCommerceMarketplace/api/eCommerceMarketplace/private/listing/listing.dto";
```
