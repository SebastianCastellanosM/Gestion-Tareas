"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductsUpdateInput_1 = require("../../../inputs/ProductsUpdateInput");
const ProductsWhereUniqueInput_1 = require("../../../inputs/ProductsWhereUniqueInput");
let UpdateProductsArgs = class UpdateProductsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsUpdateInput_1.ProductsUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductsUpdateInput_1.ProductsUpdateInput)
], UpdateProductsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], UpdateProductsArgs.prototype, "where", void 0);
UpdateProductsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateProductsArgs);
exports.UpdateProductsArgs = UpdateProductsArgs;
