import styled from 'styled-components';

export const Searchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 10px;
  input {
    text-transform: uppercase;
    background: none;
    border: none;
    border-bottom: 4px solid rgb(0, 115, 119);
    width: 60%;
    height: 50px;
    padding: 5px 0;
    font-size: 20px; 
    outline: none;
    color: rgb(0, 115, 119);
    font-weight: bold;
    &::placeholder {
      color: rgb(0, 115, 119);
    }
  }
`