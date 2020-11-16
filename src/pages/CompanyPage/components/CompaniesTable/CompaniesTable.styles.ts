import styled from 'styled-components';

export const TableWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Table = styled.table `
    border-collapse: collapse;
    margin: 10px 0;
    width: 95%;
`

export const Th = styled.th`
    padding: 12px 15px;
    border: 1px solid #ddd;
    font-size: 16px;
    background: rgb(0, 115, 119);
    color: #e7e7e7;
    text-align: center;
    &:hover {
        cursor: pointer;
        background: #f5f5f5;
        color: rgb(0, 115, 119);
        transition: .3s
    }
`