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

    @media(max-width: 720px) {
        display: block;
        thead {
            display: none;
            tr {
                margin-bottom: 15px;
            }
        }
        tbody {
            display: block;
        }
    }
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

export const ResponseDiv = styled.div`
    display: none;
    @media(max-width: 720px) {
        display: block !important;
        margin-bottom: 10px;
        text-align: center;
        ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            list-style: none;
            text-align: center;
            li {
                padding: 10px 5px;
                display: flex;
                align-items: center;
                border: 1px dotted #FFF;
                background-color: rgb(0, 115, 119);
                letter-spacing: 1px;
                color: #FFF;
                font-size: 12px;
            }
        }
    }
`