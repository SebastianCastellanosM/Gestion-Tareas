"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductsCreateManyInput_1 = require("../../../inputs/ProductsCreateManyInput");
let CreateManyProductsArgs = class CreateManyProductsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductsCreateManyInput_1.ProductsCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyProductsArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyProductsArgs.prototype, "skipDuplicates", void 0);
CreateManyProductsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyProductsArgs);
exports.CreateManyProductsArgs = CreateManyProductsArgs;
