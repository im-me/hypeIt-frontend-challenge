import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FestivalDetails from '../FestivalDetails';
import { Festivals } from '../Festivals';
import { Home } from '../Home';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/festivals" element={<Festivals />} />
      <Route path="/festival/:id" element={<FestivalDetails />} />
    </Routes>
  );
};
