/**
 * Full field set used by validateSchemaDefAgainstMongoose.
 * Create input is a subset (listing | bid); edit is status-only.
 * See individual validator files for their specific form types.
 */
export const OrderSchemaDef = {
    listing:     {type: "objectId", required: false},
    taskRequest: {type: "objectId", required: false},
    bid:         {type: "objectId", required: false},
    customer:    {type: "objectId", required: true},
    provider:    {type: "objectId", required: true},
    amount:      {type: "number",   required: true, min: 0},
    currency:    {type: "objectId", required: true},
} as const;

export type OrderStatus     = "pending" | "accepted" | "in_progress" | "completed" | "cancelled";
export type EditOrderStatus = "accepted" | "in_progress" | "cancelled";
