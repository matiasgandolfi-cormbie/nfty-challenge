import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    role?: string;
    id?: number | string;
  }

  interface Session extends DefaultSession {
    user?: {
      role?: string;
      id? : number | strin;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
    id?: number | string;
  }
}