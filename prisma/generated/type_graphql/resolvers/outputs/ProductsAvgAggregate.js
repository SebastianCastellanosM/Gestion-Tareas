"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductsAvgAggregate = class ProductsAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductsAvgAggregate.prototype, "price", void 0);
ProductsAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductsAvgAggregate", {
        isAbstract: true
    })
], ProductsAvgAggregate);
exports.ProductsAvgAggregate = ProductsAvgAggregate;
