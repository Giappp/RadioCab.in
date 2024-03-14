import { User } from "./user";

export interface Driver extends User {
    driverId: number;
    driverName:string;
    contacPerson:string;
    city:string;
    experience:number;
    isActive:boolean;
    subscription: string;
    cars: string;
}
