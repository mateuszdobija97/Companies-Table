import React from 'react'
import { EnhancedCompany } from '../modules/companies/TablePage'
import styled from 'styled-components'

interface ITr {
    isOdd: boolean
}

const Tr = styled.tr<ITr>`
    background: ${({isOdd}) => isOdd ? '#ececec' : '#f5f5f5' };
    &:hover {
        cursor: pointer;
        background: #DDD;
    }
`

const Td = styled.td`
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
`

interface ICompanyDetailsProps { company: EnhancedCompany, index: number }

const CompanyDetails: React.FC<ICompanyDetailsProps> = ({ company, index }) => {

    return (
            <Tr isOdd={Boolean(index%2)}>
                <Td>{company.id}</Td>
                <Td>{company.name}</Td>
                <Td>{company.city}</Td>
                <Td>{company.incomes}</Td>
                <Td>{company.avgIncomes}</Td>
                <Td>{company.lastMonthIncomes}</Td>
            </Tr>
    )
}

export default CompanyDetails;