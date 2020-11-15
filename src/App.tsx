import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
    <Router>
    <Wrapper>
      <GlobalStyle />
      <Route path='/' component={TablePage} />
    </Wrapper>
    </Router>
  )
};

export default App;
