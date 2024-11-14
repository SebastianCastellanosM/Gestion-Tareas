"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var ProductsScalarFieldEnum;
(function (ProductsScalarFieldEnum) {
    ProductsScalarFieldEnum["id"] = "id";
    ProductsScalarFieldEnum["name"] = "name";
    ProductsScalarFieldEnum["description"] = "description";
    ProductsScalarFieldEnum["price"] = "price";
    ProductsScalarFieldEnum["image"] = "image";
    ProductsScalarFieldEnum["createdAt"] = "createdAt";
    ProductsScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProductsScalarFieldEnum = exports.ProductsScalarFieldEnum || (exports.ProductsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductsScalarFieldEnum, {
    name: "ProductsScalarFieldEnum",
    description: undefined,
});
