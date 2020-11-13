import { CompanyIncomesItem } from '../api/companyIncomes'

export const sumOfIncomes = ( incomes: CompanyIncomesItem[] ) : number => {
    let sum = 0;
    incomes.map(income => 
      sum += parseInt(income.value)
    )
    return sum;
  }

  export const avgOfIncomes = ( sumOfIncomes: number, howMany: number ) : number => {
      return sumOfIncomes / howMany;
  }

  export const lastMonthIncomes = ( incomes: CompanyIncomesItem[] ) : number => {
      const today = new Date();
      let lastMonth = today.getMonth() - 1;
      let actuallyYear = today.getFullYear();

      lastMonth === 1 ? actuallyYear-- : lastMonth = 11;

      let lastMonthIncomes = 0;

      const getLastMonthIncomes = incomes.filter(income => {
          const incomeDate = new Date(income.date);
          return incomeDate.getMonth() === lastMonth && incomeDate.getFullYear() === actuallyYear
      })

      getLastMonthIncomes.map(income => lastMonthIncomes += parseInt(income.value))

      return lastMonthIncomes;
  }