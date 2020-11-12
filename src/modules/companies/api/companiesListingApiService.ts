import { httpGet } from "../../../common/http/httpService";
import { Company } from "./company";
import { CompanyIncomes } from "./companyIncomes";

export const getCompanies = (): Promise<Company[]> => {
  return httpGet("https://recruitment.hal.skygate.io/companies");
};

export const getCompanyById = (id: number): Promise<CompanyIncomes> => {
  return httpGet(`https://recruitment.hal.skygate.io/incomes/${id}`);
};
