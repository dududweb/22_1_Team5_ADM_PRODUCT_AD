import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import SalesPeriod from './Pages/SalesPeriod/SalesPeriod';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/period" element={<SalesPeriod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
