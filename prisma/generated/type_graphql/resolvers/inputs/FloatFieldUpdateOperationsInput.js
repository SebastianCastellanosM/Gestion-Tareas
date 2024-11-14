"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let FloatFieldUpdateOperationsInput = class FloatFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatFieldUpdateOperationsInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatFieldUpdateOperationsInput.prototype, "increment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatFieldUpdateOperationsInput.prototype, "decrement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatFieldUpdateOperationsInput.prototype, "multiply", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FloatFieldUpdateOperationsInput.prototype, "divide", void 0);
FloatFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("FloatFieldUpdateOperationsInput", {
        isAbstract: true
    })
], FloatFieldUpdateOperationsInput);
exports.FloatFieldUpdateOperationsInput = FloatFieldUpdateOperationsInput;
