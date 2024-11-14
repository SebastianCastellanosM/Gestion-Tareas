"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductsWhereUniqueInput_1 = require("../../../inputs/ProductsWhereUniqueInput");
let FindUniqueProductsArgs = class FindUniqueProductsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], FindUniqueProductsArgs.prototype, "where", void 0);
FindUniqueProductsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueProductsArgs);
exports.FindUniqueProductsArgs = FindUniqueProductsArgs;
