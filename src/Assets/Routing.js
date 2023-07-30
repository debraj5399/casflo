// Routing.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuComp from '../Components/MenuComp';
import Dashboard from '../Pages/Dashboard';
import Customer from '../Pages/Customer';
import Settings from '../Pages/Settings';
import Billing from '../Pages/Billing';

function Routing() {
  return (
    <Router>
      <MenuComp>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </MenuComp>
    </Router>
  );
}

export default Routing;
