import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=I5UtPTq7OR28n8LXnknZIUBjAnEc5cyL`
    );
    return data;
  } catch (error) {
    if(axios.isAxiosError(error)){
        console.log("error message:", error.message);
        return error.message;
    }else{
        console.log("unexpected error: ", error);
        return "An expected error has occured.";
    }
  }

};