import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateInput {
    sessionToken: string;
    expires: Date;
    user: UserCreateNestedOneWithoutSessionsInput;
}
