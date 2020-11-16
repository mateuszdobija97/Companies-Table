import React from 'react'
import { useState } from 'react'
import { sort } from '../../../../utils/sort'
import { CompaniesTableProps, EnhancedCompany } from '../../CompanyPage.types'
import {CompanyDetails} from '../CompanyDetails'
import { TableWrapper, Table, Th } from './CompaniesTable.styles'

const CompaniesTable: React.FC<CompaniesTableProps> = ({ companies, filter, currentPage, perPage }) => {
    const [sortDesc, setSortDesc] = useState<boolean>(false);

    const sortByColumn = (type: string, key: string, list: EnhancedCompany[], sortDesc: boolean) : EnhancedCompany[] => {
        setSortDesc(!sortDesc)
        return sort(type, key, list, sortDesc);
    }

    const filteredCompanies = companies.filter(company => {
        return (
                company.id.toString(10).includes(filter) ||
                company.name.toLowerCase().includes(filter.toLowerCase()) ||
                company.city.toLowerCase().includes(filter.toLowerCase()) ||
                company.incomes.toString(10).includes(filter) ||
                company.avgIncomes.toString(10).includes(filter) ||
                company.lastMonthIncomes.toString(10).includes(filter)
        )
    })

    const indexOfLastCompany: number = currentPage * perPage;
    const indexOfFirstCompany: number = indexOfLastCompany - perPage;
    const currentCompanies: EnhancedCompany[] = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany)

    const renderedCompaniesDetails = currentCompanies.map((company, index) => <CompanyDetails key={company.id} company={company} index={index} />)

    return (
        <TableWrapper>
            <Table>
                <thead>
                    <tr>
                        <Th onClick={() => sortByColumn('number', 'id', companies, sortDesc)}> Id: </Th>
                        <Th onClick={() => sortByColumn('string', 'name', companies, sortDesc)}> Name: </Th>
                        <Th onClick={() => sortByColumn('string', 'city', companies, sortDesc)}> City: </Th>
                        <Th onClick={() => sortByColumn('number', 'incomes', companies, sortDesc)}> Total Incomes: </Th>
                        <Th onClick={() => sortByColumn('number', 'avgIncomes', companies, sortDesc)}> Average Incomes: </Th>
                        <Th onClick={() => sortByColumn('number', 'lastMonthIncomes', companies, sortDesc)}> Last Month Incomes: </Th>
                    </tr>
                </thead>
                <tbody>
                    {renderedCompaniesDetails}
                </tbody>
            </Table>
        </TableWrapper>
    )
}

export default CompaniesTable;