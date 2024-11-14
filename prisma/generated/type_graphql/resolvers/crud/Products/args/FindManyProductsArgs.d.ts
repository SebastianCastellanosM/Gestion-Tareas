import { ProductsOrderByWithRelationInput } from "../../../inputs/ProductsOrderByWithRelationInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
export declare class FindManyProductsArgs {
    where?: ProductsWhereInput | undefined;
    orderBy?: ProductsOrderByWithRelationInput[] | undefined;
    cursor?: ProductsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "price" | "image" | "createdAt" | "updatedAt"> | undefined;
}
