import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import DeleteButton from './Component/Button/DeleteButton';
import SaveButton from './Component/Button/SaveButton';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bu" element={<DeleteButton />} />
        <Route path="/sa" element={<SaveButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
