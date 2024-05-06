import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";

import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {

  const [search, setSearch] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    console.log(result)
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
  console.log(searchResult);

  };
  return (
    <div>
      <Search search={search} onClick={onClick} HandleChange={HandleChange} />
      <CardList />
    </div>
  );
}

export default App;
