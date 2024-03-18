import { Decimal } from "@prisma/client/runtime/library";

export interface Services {
    idService?: number;
    codService: string;
    description: string;
    cost: number | string | Decimal;
    avalible: boolean;
}