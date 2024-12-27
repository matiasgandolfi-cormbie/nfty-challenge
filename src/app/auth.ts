import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "@/lib/db";

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: { strategy: "jwt" },
  callbacks: {
    // jwt() se ejecuta cada vez que se crea o actualiza un token JWT
    // Aqui puedes agregar informacion adicional al token
    jwt({ token, user }) {
      if (user) { // El usuario estara disponible durante el login
        token.role = user.role;
      }
      return token
    },
    // session() se utiliza para agregar la informacion del token a la session del usuario
    // Permite que la informacion del token este disponible en el cliente
    session({ session, token }) {
      if(session.user) {
        session.user.role = token.role;
      }
      return session
    },
  },
})