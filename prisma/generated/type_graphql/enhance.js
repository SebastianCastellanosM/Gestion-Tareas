"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    Products: crudResolvers.ProductsCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver,
        groupBySession: actionResolvers.GroupBySessionResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Products: {
        findUniqueProducts: actionResolvers.FindUniqueProductsResolver,
        findFirstProducts: actionResolvers.FindFirstProductsResolver,
        findManyProducts: actionResolvers.FindManyProductsResolver,
        createProducts: actionResolvers.CreateProductsResolver,
        createManyProducts: actionResolvers.CreateManyProductsResolver,
        deleteProducts: actionResolvers.DeleteProductsResolver,
        updateProducts: actionResolvers.UpdateProductsResolver,
        deleteManyProducts: actionResolvers.DeleteManyProductsResolver,
        updateManyProducts: actionResolvers.UpdateManyProductsResolver,
        upsertProducts: actionResolvers.UpsertProductsResolver,
        aggregateProducts: actionResolvers.AggregateProductsResolver,
        groupByProducts: actionResolvers.GroupByProductsResolver
    },
    VerificationToken: {
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
        updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver
    }
};
const crudResolversInfo = {
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Products: ["findUniqueProducts", "findFirstProducts", "findManyProducts", "createProducts", "createManyProducts", "deleteProducts", "updateProducts", "deleteManyProducts", "updateManyProducts", "upsertProducts", "aggregateProducts", "groupByProducts"],
    VerificationToken: ["verificationToken", "findFirstVerificationToken", "verificationTokens", "createVerificationToken", "createManyVerificationToken", "deleteVerificationToken", "updateVerificationToken", "deleteManyVerificationToken", "updateManyVerificationToken", "upsertVerificationToken", "aggregateVerificationToken", "groupByVerificationToken"]
};
const argsInfo = {
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProductsArgs: ["where"],
    FindFirstProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProductsArgs: ["data"],
    CreateManyProductsArgs: ["data", "skipDuplicates"],
    DeleteProductsArgs: ["where"],
    UpdateProductsArgs: ["data", "where"],
    DeleteManyProductsArgs: ["where"],
    UpdateManyProductsArgs: ["data", "where"],
    UpsertProductsArgs: ["where", "create", "update"],
    AggregateProductsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProductsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationTokenArgs: ["data"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    DeleteVerificationTokenArgs: ["where"],
    UpdateVerificationTokenArgs: ["data", "where"],
    DeleteManyVerificationTokenArgs: ["where"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpsertVerificationTokenArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["accounts", "sessions"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    Session: ["sessionToken", "userId", "expires"],
    User: ["id", "name", "email", "emailVerified", "image"],
    Products: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    VerificationToken: ["identifier", "token", "expires"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "_count", "_min", "_max"],
    AggregateProducts: ["_count", "_avg", "_sum", "_min", "_max"],
    ProductsGroupBy: ["id", "name", "description", "price", "image", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMaxAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCountAggregate: ["sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["sessionToken", "userId", "expires"],
    UserCount: ["accounts", "sessions"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image"],
    ProductsCountAggregate: ["id", "name", "description", "price", "image", "createdAt", "updatedAt", "_all"],
    ProductsAvgAggregate: ["price"],
    ProductsSumAggregate: ["price"],
    ProductsMinAggregate: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsMaxAggregate: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountOrderByWithRelationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountWhereUniqueInput: ["provider_providerAccountId"],
    AccountOrderByWithAggregationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["sessionToken"],
    SessionOrderByWithAggregationInput: ["sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "accounts", "sessions"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
    ProductsWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsOrderByWithRelationInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsWhereUniqueInput: ["id"],
    ProductsOrderByWithAggregationInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    ProductsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["identifier_token"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    AccountCreateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountUpdateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountCreateManyInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountUpdateManyMutationInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateInput: ["sessionToken", "expires", "user"],
    SessionUpdateInput: ["sessionToken", "expires", "user"],
    SessionCreateManyInput: ["sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["sessionToken", "expires"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image"],
    ProductsCreateInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsUpdateInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsCreateManyInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsUpdateManyMutationInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMinOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SessionCountOrderByAggregateInput: ["sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["sessionToken", "userId", "expires"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ProductsCountOrderByAggregateInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsAvgOrderByAggregateInput: ["price"],
    ProductsMaxOrderByAggregateInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsMinOrderByAggregateInput: ["id", "name", "description", "price", "image", "createdAt", "updatedAt"],
    ProductsSumOrderByAggregateInput: ["price"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts"],
    AccountCreateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires"],
    AccountCreateManyUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateManyUserInput: ["sessionToken", "expires"],
    AccountUpdateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpdateWithoutUserInput: ["sessionToken", "expires"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
