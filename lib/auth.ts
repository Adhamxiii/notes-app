import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import UserVerificationEmail from "@/components/emails/VerificationEmail";
import PasswordResetEmail from "@/components/emails/ResetEmail";

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Adham <adham@adham.com>",
        to: user.email,
        subject: "Verify your email",
        react: UserVerificationEmail({
          userEmail: user.email,
          verificationUrl: url,
        }),
      });
    },
    sendOnSignUp: true,
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Adham <adham@adham.com>",
        to: user.email,
        subject: "Reset your password",
        react: PasswordResetEmail({
          userEmail: user.email,
          resetUrl: url,
          requestTime: new Date().toLocaleString(),
        }),
      });
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [nextCookies()],
});
