export interface CompanyIncomesItem {
    value: string,
    date: string,
}

export interface CompanyIncomes {
    id: number,
    incomes: CompanyIncomesItem[],
}