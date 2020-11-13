import React from "react";
import GlobalStyle from './styles/global'
import styled from 'styled-components';

import TablePage from "./modules/companies/TablePage";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <TablePage />
    </Wrapper>
  )
};

export default App;
