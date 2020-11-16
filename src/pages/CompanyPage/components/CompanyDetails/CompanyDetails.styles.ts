import styled from 'styled-components';

interface ITr {
    isOdd: boolean
}

export const Tr = styled.tr<ITr>`
    background: ${({isOdd}) => isOdd ? '#ececec' : '#f5f5f5' };
    &:hover {
        cursor: pointer;
        background: #DDD;
    }
`

export const Td = styled.td`
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
`