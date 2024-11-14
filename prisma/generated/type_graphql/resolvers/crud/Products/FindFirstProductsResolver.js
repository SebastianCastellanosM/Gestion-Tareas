"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstProductsArgs_1 = require("./args/FindFirstProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let FindFirstProductsResolver = class FindFirstProductsResolver {
    async findFirstProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Products_1.Products, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProductsArgs_1.FindFirstProductsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstProductsResolver.prototype, "findFirstProducts", null);
FindFirstProductsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], FindFirstProductsResolver);
exports.FindFirstProductsResolver = FindFirstProductsResolver;
