"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductsWhereInput_1 = require("../../../inputs/ProductsWhereInput");
let DeleteManyProductsArgs = class DeleteManyProductsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsWhereInput_1.ProductsWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsWhereInput_1.ProductsWhereInput)
], DeleteManyProductsArgs.prototype, "where", void 0);
DeleteManyProductsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyProductsArgs);
exports.DeleteManyProductsArgs = DeleteManyProductsArgs;
