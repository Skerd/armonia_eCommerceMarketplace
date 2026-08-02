import type {OrderMilestone} from "./orderMilestone.dto";

export type {OrderMilestone} from "./orderMilestone.dto";

export type OrderMilestoneFormResponseType = {
    data: OrderMilestone[];
    total: number;
};
