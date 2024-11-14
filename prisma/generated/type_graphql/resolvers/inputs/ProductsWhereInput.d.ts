import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProductsWhereInput {
    AND?: ProductsWhereInput[] | undefined;
    OR?: ProductsWhereInput[] | undefined;
    NOT?: ProductsWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    price?: FloatFilter | undefined;
    image?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
