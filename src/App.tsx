import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'
import { Wrapper } from "./App.styles";

import TablePage from "./pages/CompanyPage/CompanyPage";

const App: React.FC = () => {
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
