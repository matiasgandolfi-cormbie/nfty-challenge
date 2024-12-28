import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "@/lib/db";

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token
    },
    // session() se utiliza para agregar la informacion del token a la session del usuario
    // Permite que la informacion del token este disponible en el cliente
    session({ session, token }) {
      if(session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session
    },
  },
})