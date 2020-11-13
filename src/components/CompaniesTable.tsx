import * as React from 'react'
import { useState } from 'react'
import { EnhancedCompany } from '../modules/companies/TablePage'
import CompanyDetails from './CompanyDetails'
import styled from 'styled-components'
import { sort } from '../modules/companies/utils/sort'

const Table = styled.table`
    
`

const THead = styled.thead`

`

const TBody = styled.tbody`

`

const Tr = styled.tr`

`

const Th = styled.th`

`

interface CompaniesTableProps { 
    companies: EnhancedCompany[]
 }

const CompaniesTable: React.FC<CompaniesTableProps> = ({ companies }) => {
    const [sortDesc, setSortDesc] = useState<boolean>(false);

    const sortByColumn = (type: string, key: string, list: EnhancedCompany[], sortDesc: boolean) : EnhancedCompany[] => {
        setSortDesc(!sortDesc)
        return sort(type, key, list, sortDesc);
    }

const renderedData = companies.map(company => <CompanyDetails key={company.id} company={company} />)

    return (
        <Table>
            <THead>
            <Tr>
                <Th onClick={() => sortByColumn('number', 'id', companies, sortDesc)}>
                    Id:
                </Th>
                <Th onClick={() => sortByColumn('string', 'name', companies, sortDesc)}>
                    Name:
                </Th>
                <Th onClick={() => sortByColumn('string', 'city', companies, sortDesc)}>
                    City:
                </Th>
                <Th onClick={() => sortByColumn('number', 'incomes', companies, sortDesc)}>
                    Total incomes:
                </Th>
                <Th onClick={() => sortByColumn('number', 'avgIncomes', companies, sortDesc)}>
                    Average Incomes:
                </Th>
                <Th onClick={() => sortByColumn('number', 'lastMonthIncomes', companies, sortDesc)}>
                    Last month incomes:
                </Th>
            </Tr>
            </THead>
            <TBody>
            {renderedData}
            </TBody>
        </Table>
    )
}

export default CompaniesTable
