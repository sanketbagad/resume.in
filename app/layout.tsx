import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNavBar } from "./components/TopNavBar";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume.in",
  description: "Create a professional resume easily with this powerful resume builder. No sign up required. Resume.in is the best resume builder for job seekers.",
  keywords: "resume, resume builder, resume parser, resume.in, resume.in builder, resume.in parser Sanket Bagad",
  publisher: "Sanket Bagad",
  applicationName: "Resume.in",
  creator: "Sanket Bagad",
  generator: "Resume.in",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    signInUrl="/sign-in"
    signUpUrl="/sign-up"
    >
    <html lang="en">
      <head>
        <link rel="icon" href="/Resume.PNG" />
      </head>
      <body className={inter.className}>
        <TopNavBar />
        {children}
        <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
        />
      </body>
    </html>
    </ClerkProvider>
  );
}
