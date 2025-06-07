import { ReactNode } from "react";
import { CivicAuthProvider } from "@civic/auth/nextjs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <CivicAuthProvider>
      {children}
    </CivicAuthProvider>
  );
}