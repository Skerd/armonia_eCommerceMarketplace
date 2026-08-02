import type {OrderDelivery} from "./orderDelivery.dto";

export type {OrderDelivery} from "./orderDelivery.dto";

export type OrderDeliveryFormResponseType = {
    data: OrderDelivery[];
    total: number;
};
