import React from "react";
import CompaniesListing from "./modules/companies/companiesListing";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <CompaniesListing />;
};

export default App;
