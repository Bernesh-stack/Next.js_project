import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: "Ov23liJ6YRicG0Q8aW9b",
      clientSecret: "1ae03816e82bbec0b8b66924e26ff82682800db0",
    }),
  ],
  secret: "e4KS/XqXPLzo8dG/iFy78L4v0Xx+4mF0VR142S6P86g=",
});
