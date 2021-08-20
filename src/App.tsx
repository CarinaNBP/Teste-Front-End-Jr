import { SearchBar } from "./components/SearchBar/index";
import redeImg from "./assets/rede.png";
import { GlobalStyle } from "./styles/global";
import { Home } from "./components/Home";
import { CardUser } from "./components/CardUser";
import { useState } from "react";
import { User } from "./types";
import { useEffect } from "react";
import usersMock from "./users";

export function App() {
  const [user, setUser] = useState<User | null>();

  // essa função só tem 2 responsabilidades:
  // 1 chamar api do git
  // 2 setar dados no estado de USER
  const fetchUserData = (user: string) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });

        setUser(!data.message ? data : null);
      });
  };

  console.log({ user });

  // essa função é usada pra pegar o evento do submit do form e os values dele
  // e enviar para OUTRA função, que no caso é chamar api do github
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: any
  ) => {
    event.preventDefault();
    const value = event.target[0].value;
    console.log(value);
    fetchUserData(value);
  };

  // esse effect só é usado para setar os dados mockados do usuario
  // para não ter que ficar clicando no botao de search para testar o card
  // useEffect(() => {
  //   setUser(usersMock as unknown as User);
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Home onSubmit={handleSubmit} user={user} />
    </>
  );
}
