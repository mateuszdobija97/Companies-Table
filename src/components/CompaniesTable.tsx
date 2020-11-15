import * as React from 'react'
import { useState } from 'react'
import { EnhancedCompany } from '../modules/companies/TablePage'
import { sort } from '../modules/companies/utils/sort'
import styled from 'styled-components'
import CompanyDetails from './CompanyDetails'

const TableWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Table = styled.table `
    border-collapse: collapse;
    margin: 10px 0;
    width: 95%;
`

const Th = styled.th`
    padding: 12px 15px;
    border: 1px solid #ddd;
    font-size: 16px;
    background: rgb(0, 115, 119);
    color: #e7e7e7;
    text-align: center;
    &:hover {
        cursor: pointer;
        background: #f5f5f5;
        color: rgb(0, 115, 119);
        transition: .3s
    }
`

interface CompaniesTableProps { 
    companies: EnhancedCompany[],
    filter: string,
    currentPage: number,
    perPage: number,
 }

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