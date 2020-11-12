import React, { useEffect, useState, useCallback, useMemo } from "react";
import { AsyncStatus } from "../../common/types";
import { Company } from "./api/company";
import { CompanyIncomes } from "./api/companyIncomes";
import { getCompanies, getCompanyById } from "./api/TablePageApiService";
import { sumOfIncomes, avgOfIncomes, lastMonthIncomes } from "./utils/calculations";

export interface TablePageProps {}

type CompanyDetails = {
  incomes: number,
  avgIncomes: number,
  lastMonthIncomes: number,
}

type EnhancedCompany = Company & CompanyDetails

const TablePage: React.FC<TablePageProps> = () => {
  const [basicCompanyList, setBasicCompanyList] = useState<Company[]>([]);
  const [companiesDetails, setCompaniesDetails] = useState<CompanyIncomes[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<AsyncStatus>(AsyncStatus.Idle);
  const [search, setSearch] = useState<string>('');

  const getCompaniesList = useCallback(async () => {
    setLoadingStatus(AsyncStatus.Loading);
    try {
      const companies = await getCompanies();
      setLoadingStatus(AsyncStatus.Success)
      setBasicCompanyList(companies)
    }
    catch (error){
      setLoadingStatus(AsyncStatus.Error)
    }
  }, [])

  const getCompaniesDetails = useCallback(async () => {
    setLoadingStatus(AsyncStatus.Idle)
    try {
      const companiesDetailsResponse = await Promise.all(basicCompanyList.map(async ({id}) => await getCompanyById(id)))
      setCompaniesDetails(companiesDetailsResponse)
      setLoadingStatus(AsyncStatus.Success)
    }
    catch(error) {
      setLoadingStatus(AsyncStatus.Error)
    }
  }, [basicCompanyList])

  const enhancedCompanies = useMemo<EnhancedCompany[]>(() => {
    if(!basicCompanyList.length || !companiesDetails.length) return [];
    return basicCompanyList.map(company => {
      const companyDetails = companiesDetails.find(_companyDetails => _companyDetails.id === company.id)
      if(!companyDetails) return null;
    return {
      id: company.id,
      name: company.name,
      city: company.city,
      incomes: sumOfIncomes(companyDetails.incomes),
      avgIncomes: avgOfIncomes(sumOfIncomes(companyDetails.incomes), companyDetails.incomes.length ),
      lastMonthIncomes: lastMonthIncomes(companyDetails.incomes)
    }}).filter(Boolean) as EnhancedCompany[]
  }, [basicCompanyList, companiesDetails]) 

  useEffect(() => { getCompaniesList() }, [getCompaniesList]);

  useEffect(() => { 
    if(!basicCompanyList.length) return;
    getCompaniesDetails() 
  }, [basicCompanyList, getCompaniesDetails])

  return (
    <>
    { loadingStatus===AsyncStatus.Loading || !enhancedCompanies.length ? <p>Loading...</p> : <div>
      <pre>
        {JSON.stringify(enhancedCompanies, null, 2)}
      </pre>
    </div>}
    </>
  );
};

export default TablePage;