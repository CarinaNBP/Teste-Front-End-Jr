import { User } from "../../types";
import { CardUser } from "../CardUser";
import { SearchBar } from "../SearchBar";
import { HomeStyled, NotFoundMessage } from "./styles";

type SearchBarProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  user?: User | null;
};

export function Home({ onSubmit, user }: SearchBarProps) {
  return (
    <HomeStyled>
      <SearchBar onSubmit={onSubmit} />
      {user && <CardUser user={user} />}
      {user === null && (
        <NotFoundMessage>Usuário não encontrado</NotFoundMessage>
      )}
    </HomeStyled>
  );
}
