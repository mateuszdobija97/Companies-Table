import React from 'react'
import { BrowserRouter as Router ,NavLink } from 'react-router-dom'
import { EnhancedCompany } from '../modules/companies/TablePage'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Link = styled(NavLink)`
    padding: 3px 5px;
    color: #FFF;
    border: 1px solid #000;
    text-decoration: none;
    border: none;
    &:hover {
        color: black;
        background: white;
    }
    &.active {
        background: yellow;
    }
`

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
            {currentPage !== 1 ? <Link onClick={() => setCurrentPage(currentPage--)} to={`/${currentPage--}`}>Prev</Link> : null}
            {renderedPageNumbers}
            {currentPage !== numberOfPages ? <Link onClick={() => setCurrentPage(currentPage++)} to={`/${currentPage++}`}>Next</Link> : null}
        </Wrapper>
        </Router>
    )
}

export default Pagination;