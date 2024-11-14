"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductsAvgOrderByAggregateInput_1 = require("../inputs/ProductsAvgOrderByAggregateInput");
const ProductsCountOrderByAggregateInput_1 = require("../inputs/ProductsCountOrderByAggregateInput");
const ProductsMaxOrderByAggregateInput_1 = require("../inputs/ProductsMaxOrderByAggregateInput");
const ProductsMinOrderByAggregateInput_1 = require("../inputs/ProductsMinOrderByAggregateInput");
const ProductsSumOrderByAggregateInput_1 = require("../inputs/ProductsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductsOrderByWithAggregationInput = class ProductsOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsOrderByWithAggregationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsOrderByWithAggregationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsOrderByWithAggregationInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsOrderByWithAggregationInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductsOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsCountOrderByAggregateInput_1.ProductsCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsCountOrderByAggregateInput_1.ProductsCountOrderByAggregateInput)
], ProductsOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsAvgOrderByAggregateInput_1.ProductsAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsAvgOrderByAggregateInput_1.ProductsAvgOrderByAggregateInput)
], ProductsOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsMaxOrderByAggregateInput_1.ProductsMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsMaxOrderByAggregateInput_1.ProductsMaxOrderByAggregateInput)
], ProductsOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsMinOrderByAggregateInput_1.ProductsMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsMinOrderByAggregateInput_1.ProductsMinOrderByAggregateInput)
], ProductsOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductsSumOrderByAggregateInput_1.ProductsSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductsSumOrderByAggregateInput_1.ProductsSumOrderByAggregateInput)
], ProductsOrderByWithAggregationInput.prototype, "_sum", void 0);
ProductsOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProductsOrderByWithAggregationInput);
exports.ProductsOrderByWithAggregationInput = ProductsOrderByWithAggregationInput;
