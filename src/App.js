import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./components/Index";

import Whatweare from "./components/Whatweare";

import Environment from "./components/Environment";

import Team from "./components/Team";

import Governance from "./components/Governance";

import Whatwedo from "./components/Whatwedo";

import Standard from "./components/Standard";

import Login from "./components/Login";

import Shortlisted from './components/registration/Shortlisted'

import Generalaccount from "./components/registration/Generalaccountholder";

import Dashbaord from "./components/Dashboard";

import Offset from "./components/Offset";

import Reduce from "./components/Reduce";

import Verify from "./components/Verify";

import Terms from "./components/Terms";

import Account from "./components/Account";

import Privacy from "./components/Privacy";

import Certify from "./components/Certify";

import Contact from "./components/Contact";


function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/Whatweare" element={<Whatweare />} />
          <Route exact path="/Environment" element={<Environment />} />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/Governance" element={<Governance />} />
          <Route exact path="/Whatwedo" element={<Whatwedo />} />
          <Route exact path="/Standard" element={<Standard />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Shortlisted" element={<Shortlisted />} />
          <Route exact path="/Dashboard" element={<Dashbaord />} />
          <Route exact path="/Offset" element={<Offset />} />
          <Route exact path="/Reduce" element={<Reduce />} />
          <Route exact path="/Verify" element={<Verify />} />
          <Route exact path="/Terms" element={<Terms />} />
          <Route exact path="/Account" element={<Account />} />
          <Route exact path="/Privacy" element={<Privacy />} />
          <Route exact path="/Certify" element={<Certify />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Generalaccountholder" element={<Generalaccount />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;