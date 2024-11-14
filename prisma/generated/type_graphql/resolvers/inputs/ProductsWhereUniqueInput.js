"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductsWhereUniqueInput = class ProductsWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsWhereUniqueInput.prototype, "id", void 0);
ProductsWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductsWhereUniqueInput", {
        isAbstract: true
    })
], ProductsWhereUniqueInput);
exports.ProductsWhereUniqueInput = ProductsWhereUniqueInput;
