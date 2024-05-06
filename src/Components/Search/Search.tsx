import React, { ChangeEvent,  SyntheticEvent } from "react";

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string;
    HandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onClick, search, HandleChange}: Props): JSX.Element => {

  
  
  return (
    <div>
      <input type="text" value={search} onChange={(e) => HandleChange(e)} />
    <button onClick={(e)=>onClick(e) }/>
    </div>
  );
};

export default Search;
