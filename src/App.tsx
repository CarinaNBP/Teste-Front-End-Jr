import { useState } from "react";
import { Home } from "./components/Home";
import { User } from "./types";
import { fetchUserData } from "./services";
import { GlobalStyle } from "./styles";

export function App() {
  const [user, setUser] = useState<User | null>();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event: any
  ) => {
    event.preventDefault();
    const value = event.target[0].value;
    const data = await fetchUserData(value);
    setUser(data);
  };

  return (
    <>
      <GlobalStyle />
      <Home onSubmit={handleSubmit} user={user} />
    </>
  );
}
