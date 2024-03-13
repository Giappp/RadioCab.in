import { User } from "./user";

export interface Company extends User{
    companyId: number;
    companyName: string;
    contactPerson: string;
    designation: string;
    faxNumber: string;
    description: string;
    subscription: string;
    membership: string;
}
