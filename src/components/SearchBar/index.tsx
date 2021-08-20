import { SearchBarStyled } from "./styles";

type SearchBarProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export function SearchBar({ onSubmit }: SearchBarProps) {
  return (
    <SearchBarStyled onSubmit={onSubmit}>
      <p>
        <h1>
          Buscar perfil no <span>GitHub</span>
        </h1>
      </p>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Search</button>
      </div>
    </SearchBarStyled>
  );
}
