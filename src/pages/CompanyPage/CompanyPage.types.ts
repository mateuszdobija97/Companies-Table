import { Company } from "./api/company"

export interface CompaniesTableProps { 
    companies: EnhancedCompany[],
    filter: string,
    currentPage: number,
    perPage: number,
 }

 export interface CompanyDetails {
    incomes: number,
    avgIncomes: number,
    lastMonthIncomes: number,
  }
  
  export type EnhancedCompany = Company & CompanyDetails