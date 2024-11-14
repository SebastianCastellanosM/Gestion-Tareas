"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyProductsArgs_1 = require("./args/FindManyProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let FindManyProductsResolver = class FindManyProductsResolver {
    async findManyProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Products_1.Products], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProductsArgs_1.FindManyProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyProductsResolver.prototype, "findManyProducts", null);
FindManyProductsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], FindManyProductsResolver);
exports.FindManyProductsResolver = FindManyProductsResolver;
