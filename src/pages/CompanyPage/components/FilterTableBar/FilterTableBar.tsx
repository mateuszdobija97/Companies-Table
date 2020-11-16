import React from 'react'
import { Searchbar } from './FilterTableBar.styles';

interface IFilterTable {
    filter: string,
    setFilter: (filter: string) => void
}

const FilterTableBar: React.FC<IFilterTable> = ({ filter, setFilter }) => {
    return (
        <Searchbar>
            <input 
                type='text'
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder='Filter the table...'
            />
        </Searchbar>
    )
}

export default FilterTableBar;