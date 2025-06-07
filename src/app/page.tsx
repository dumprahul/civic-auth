import { UserButton } from "@civic/auth-web3/react";

export default function TitleBar() {
  return (
    <div>
      <h1>My App</h1>
      <UserButton />
    </div>
  );
};

//install - npm install @civic/auth-web3 and npm install @civic/auth-web3-react