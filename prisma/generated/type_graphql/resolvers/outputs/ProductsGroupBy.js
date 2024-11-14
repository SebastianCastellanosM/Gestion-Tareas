"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductsAvgAggregate_1 = require("../outputs/ProductsAvgAggregate");
const ProductsCountAggregate_1 = require("../outputs/ProductsCountAggregate");
const ProductsMaxAggregate_1 = require("../outputs/ProductsMaxAggregate");
const ProductsMinAggregate_1 = require("../outputs/ProductsMinAggregate");
const ProductsSumAggregate_1 = require("../outputs/ProductsSumAggregate");
let ProductsGroupBy = class ProductsGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsGroupBy.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductsGroupBy.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsGroupBy.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProductsGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ProductsGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsCountAggregate_1.ProductsCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsCountAggregate_1.ProductsCountAggregate)
], ProductsGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsAvgAggregate_1.ProductsAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsAvgAggregate_1.ProductsAvgAggregate)
], ProductsGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsSumAggregate_1.ProductsSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsSumAggregate_1.ProductsSumAggregate)
], ProductsGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsMinAggregate_1.ProductsMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsMinAggregate_1.ProductsMinAggregate)
], ProductsGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsMaxAggregate_1.ProductsMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsMaxAggregate_1.ProductsMaxAggregate)
], ProductsGroupBy.prototype, "_max", void 0);
ProductsGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProductsGroupBy", {
        isAbstract: true
    })
], ProductsGroupBy);
exports.ProductsGroupBy = ProductsGroupBy;
