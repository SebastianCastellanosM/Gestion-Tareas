import { User } from "../models/User";
export declare class Session {
    sessionToken: string;
    userId: string;
    expires: Date;
    user?: User;
}
