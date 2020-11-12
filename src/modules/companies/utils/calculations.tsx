export const sumOfIncomes = ( incomes: any[] ) : number => {
    let sum = 0;
    incomes.map(income => 
      sum += parseInt(income.value)
    )
    return sum;
  }

  export const avgOfIncomes = ( sumOfIncomes: number, howManyIncomes: number ) : number => {
      return sumOfIncomes / howManyIncomes;
  }

  export const lastMonthIncomes = ( incomes: any[] ) : number => {
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