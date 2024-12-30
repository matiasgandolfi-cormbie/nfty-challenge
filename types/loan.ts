import { UserDto } from "./user";

export type Loan = {
    id? : number;
    userId : number;
    loanAmount  : number;
    address : string;
    user? : UserDto;
    createdAt? : Date;
}