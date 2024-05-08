import {
  BaseSyntheticEvent,
  ChangeEvent,
  SyntheticEvent,
  useState,
} from "react";
import "./App.css";

import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";

function App() {
  const [search, setSearch] = useState<string>("");
  const [serverError, setServerError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const HandleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatePortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatePortfolio);
  };

  const onPortfolioDelete = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });

    setPortfolioValues(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    console.log(result);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <div>
      <Search
        search={search}
        onSearchSubmit={onSearchSubmit}
        HandleSearchChange={HandleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
}

export default App;
