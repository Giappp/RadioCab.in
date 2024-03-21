import { Role } from "./role";

export interface User {
    username:string;
    email:string;
    address:string;
    city:string;
    phone:string;
    password:string;
    role:Role;
    token?: string;
}
