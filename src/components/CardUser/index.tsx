import { User } from "../../types";
import { CardUserStyled } from "./styles";

export function CardUser({ user }: { user: User }) {
  return (
    <CardUserStyled>
      <img src={user?.avatar_url}></img>
      <div>
        <a href="">
          <h1>{user?.name || user?.login}</h1>
        </a>
        <h2>{user?.bio}</h2>
        <h3>
          <strong>{user?.followers}</strong> followers .
          <strong>{user?.following}</strong> following
        </h3>
        <h3>{user?.email}</h3>
        <h3>Repositories: {user?.public_repos}</h3>
      </div>
    </CardUserStyled>
  );
}
