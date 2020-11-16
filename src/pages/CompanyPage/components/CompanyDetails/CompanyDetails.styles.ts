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
    @media(max-width: 720px) {
        display: block;
    }
`

export const Td = styled.td`
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
    @media(max-width: 720px) {
        display: block;
        padding-left: 50%;
        text-align: right;
        position: relative;
        &::before {
            position: absolute;
            left: 0;
            width: 50%;
            padding-left: 15px;
            content: attr(data-label);
            text-align: left;
            font-size: 16px;
            font-weight: bold;
        }
    }
`