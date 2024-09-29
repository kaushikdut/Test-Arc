"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Nav from "./components/nav";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <Nav />
      {children}
    </SessionProvider>
  );
};
