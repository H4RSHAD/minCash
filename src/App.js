import React, { useEffect } from 'react';
import { initWeb3 } from './contract';
import SolicitarPrestamo from './components/SolicitarPrestamo.js';
import FinanciarPrestamo from './components/FinanciarPrestamo';
import PagarPrestamo from './components/PagarPrestamo';
import DetallesSolicitud from './components/DetallesSolicitud';

const App = () => {
  useEffect(() => {
    initWeb3();
  }, []);

  return (
    <div className="App">
      <h1>MicroPréstamos</h1>
      <SolicitarPrestamo />
      <FinanciarPrestamo />
      <PagarPrestamo />
      <DetallesSolicitud />
    </div>
  );
};

export default App;
