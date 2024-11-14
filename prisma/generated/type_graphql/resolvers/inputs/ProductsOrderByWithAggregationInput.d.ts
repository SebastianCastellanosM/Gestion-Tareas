import { ProductsAvgOrderByAggregateInput } from "../inputs/ProductsAvgOrderByAggregateInput";
import { ProductsCountOrderByAggregateInput } from "../inputs/ProductsCountOrderByAggregateInput";
import { ProductsMaxOrderByAggregateInput } from "../inputs/ProductsMaxOrderByAggregateInput";
import { ProductsMinOrderByAggregateInput } from "../inputs/ProductsMinOrderByAggregateInput";
import { ProductsSumOrderByAggregateInput } from "../inputs/ProductsSumOrderByAggregateInput";
export declare class ProductsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ProductsCountOrderByAggregateInput | undefined;
    _avg?: ProductsAvgOrderByAggregateInput | undefined;
    _max?: ProductsMaxOrderByAggregateInput | undefined;
    _min?: ProductsMinOrderByAggregateInput | undefined;
    _sum?: ProductsSumOrderByAggregateInput | undefined;
}
