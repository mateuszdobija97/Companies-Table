import React from 'react'
import { EnhancedCompany } from '../modules/companies/TablePage'
import styled from 'styled-components'

const Tr = styled.tr``

const Td = styled.td``

interface CompanyDetailsProps { company: EnhancedCompany }

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ company }) => {
    return (
        <>
            <Tr>
    <Td>{company.id}</Td>
    <Td>{company.name}</Td>
    <Td>{company.city}</Td>
    <Td>{company.incomes}</Td>
    <Td>{company.avgIncomes}</Td>
    <Td>{company.lastMonthIncomes}</Td>
            </Tr>
        </>
    )
}

export default CompanyDetails
