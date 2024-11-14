import { ProductsOrderByWithAggregationInput } from "../../../inputs/ProductsOrderByWithAggregationInput";
import { ProductsScalarWhereWithAggregatesInput } from "../../../inputs/ProductsScalarWhereWithAggregatesInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
export declare class GroupByProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "price" | "image" | "createdAt" | "updatedAt">;
    having?: ProductsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
