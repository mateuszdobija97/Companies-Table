import React from 'react'
import { EnhancedCompany } from '../../CompanyPage.types'
import { Td, Tr } from './CompanyDetails.styles';

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