import { UserButton } from "@civic/auth-web3/react";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          padding: "48px 32px",
          minWidth: "340px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#22223b",
            letterSpacing: "-1px",
          }}
        >
          Welcome to My App
        </h1>
        <p
          style={{
            color: "#4a4e69",
            marginBottom: "32px",
            fontSize: "1.1rem",
          }}
        >
          Sign in or connect your wallet to get started.
        </p>
        <UserButton />
      </div>
    </div>
  );
}

//install - npm install @civic/auth-web3 and npm install @civic/auth-web3-react