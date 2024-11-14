"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductsSumAggregate = class ProductsSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductsSumAggregate.prototype, "price", void 0);
ProductsSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductsSumAggregate", {
        isAbstract: true
    })
], ProductsSumAggregate);
exports.ProductsSumAggregate = ProductsSumAggregate;
