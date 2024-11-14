"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductsCreateInput_1 = require("../../../inputs/ProductsCreateInput");
let CreateProductsArgs = class CreateProductsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsCreateInput_1.ProductsCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductsCreateInput_1.ProductsCreateInput)
], CreateProductsArgs.prototype, "data", void 0);
CreateProductsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateProductsArgs);
exports.CreateProductsArgs = CreateProductsArgs;
