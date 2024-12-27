import { number } from "yup";
import { User } from "./user";

export type Loan = {
    id : number;
    userId : number;
    user : User;
    loanAmount  : number;
    address : string;
    createdAt : Date;
}