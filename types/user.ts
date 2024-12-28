import { Loan } from "./loan";

export type User = {
    id: number;     
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    birthDate: Date;
    phoneNumber: string;
    password: string;
    role: string;
    createdAt?: Date;
    loans?: Loan[];
};

export type UserDto = Omit<User, 'password' | 'createdAt' | 'birthDate' | 'address' | 'phoneNumber'>;
