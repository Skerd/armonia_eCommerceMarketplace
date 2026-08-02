import type {OrderRevision} from "./orderRevision.dto";

export type {OrderRevision} from "./orderRevision.dto";

export type OrderRevisionFormResponseType = {
    data: OrderRevision[];
    total: number;
};
