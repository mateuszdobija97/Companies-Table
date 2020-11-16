import React from 'react'
import { EnhancedCompany } from '../../CompanyPage.types'
import { Td, Tr } from './CompanyDetails.styles';

interface ICompanyDetailsProps { company: EnhancedCompany, index: number }

const CompanyDetails: React.FC<ICompanyDetailsProps> = ({ company, index }) => {

    return (
            <Tr isOdd={Boolean(index%2)}>
                <Td data-label='Id:'>{company.id}</Td>
                <Td data-label='Name:'>{company.name}</Td>
                <Td data-label='City:'>{company.city}</Td>
                <Td data-label='Incomes:'>{company.incomes}</Td>
                <Td data-label='Average Incomes:'>{company.avgIncomes}</Td>
                <Td data-label='Last Month Incomes:'>{company.lastMonthIncomes}</Td>
            </Tr>
    )
}

export default CompanyDetails;