import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { EnhancedCompany } from '../../CompanyPage.types';
import { Wrapper, Link } from './Pagination.styles';

interface IPaginationProps {
    perPage: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    companies: EnhancedCompany[],
}

const Pagination: React.FC<IPaginationProps> = ({ perPage, setCurrentPage, companies, currentPage }) => {

    const numberOfPages = Math.ceil(companies.length / perPage);

    const renderedPageNumbers = Array.from({length: numberOfPages}, (_, i) => i + 1).map(number => (
        <Link onClick={() => setCurrentPage(number)} to={`/${number}`} key={number}>{number}</Link>
    ))

    return (
        <Router>
        <Wrapper>
            {renderedPageNumbers}
        </Wrapper>
        </Router>
    )
}

export default Pagination;