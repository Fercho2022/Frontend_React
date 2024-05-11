import axios from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=I5UtPTq7OR28n8LXnknZIUBjAnEc5cyL`
    );
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?&apikey=I5UtPTq7OR28n8LXnknZIUBjAnEc5cyL`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getkeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?&apikey=I5UtPTq7OR28n8LXnknZIUBjAnEc5cyL`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};
