"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertProductsArgs_1 = require("./args/UpsertProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let UpsertProductsResolver = class UpsertProductsResolver {
    async upsertProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Products_1.Products, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProductsArgs_1.UpsertProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertProductsResolver.prototype, "upsertProducts", null);
UpsertProductsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], UpsertProductsResolver);
exports.UpsertProductsResolver = UpsertProductsResolver;
