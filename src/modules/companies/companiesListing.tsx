import React, { useEffect, useState } from "react";
import { getCompanies, getCompanyById } from "./api/companiesListingApiService";
import { Company } from "./api/company";
import { sumOfIncomes, avgOfIncomes, lastMonthIncomes } from "./functions/calculations";

export interface CompaniesListingProps {}

const CompaniesListing: React.FC<CompaniesListingProps> = () => {
  const [companiesList, setCompaniesList] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const companiesList = [];
    getCompanies()
      .then((responseCompaniesList) => {
        responseCompaniesList.map(company => getCompanyById(company.id)
        .then(companyResponse => {
          const basicCompanyName = responseCompaniesList.find((company =>  company.id === companyResponse.id))
          const result = {
            id: basicCompanyName?.id,
            name: basicCompanyName?.name,
            city: basicCompanyName?.city,
            incomes: sumOfIncomes(companyResponse.incomes),
            avgIncomes: avgOfIncomes(sumOfIncomes(companyResponse.incomes), companyResponse.incomes.length ),
            lastMonthIncomes: lastMonthIncomes(companyResponse.incomes)
          }
          companiesList.push(result);
        }))
      })
      .catch()
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>table</h1>
    </div>
  );
};

export default CompaniesListing;
