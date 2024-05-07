import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string;
  HandleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  HandleSearchChange,
}: Props): JSX.Element => {
  return (
    <>
    <form onSubmit={onSearchSubmit}>
    <input value={search} onChange={HandleSearchChange} />
    </form>
      
      
    </>
  );
};

export default Search;
