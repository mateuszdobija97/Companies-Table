import React from 'react'
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    margin: 10px 0;
`

interface IFilterTable {
    filter: string,
    setFilter: (filter: string) => void
}

const FilterTableBar: React.FC<IFilterTable> = ({ filter, setFilter }) => {
    return (
        <InputWrapper>
            <Input 
                type='text'
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
        </InputWrapper>
    )
}

export default FilterTableBar;