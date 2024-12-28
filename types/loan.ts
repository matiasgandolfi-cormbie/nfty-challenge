import { number } from "yup";

export type Loan = {
    userId : number;
    loanAmount  : number;
    address : string;
}