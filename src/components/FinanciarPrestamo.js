import React, { useState } from 'react';
import { web3, contract } from '../contract';
import './FinanciarPrestamo.css';

const FinanciarPrestamo = () => {
  const [idSolicitud, setIdSolicitud] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.financiarPrestamo(idSolicitud).send({ from: accounts[0], value: monto });
  };

  
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="financiar-prestamo-container">
      <h2>Financiar Préstamo</h2>
      <form className="prestamo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID Solicitud:</label>
          <input
            type="number"
            value={idSolicitud}
            onChange={(e) => setIdSolicitud(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Monto (en ETH/AVAX):</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
        </div>
        <div className="buttons-group">      
        <button type="submit" className="submit-button">Financiar</button>
        <button type="button" className="back-button" onClick={handleBack}>Volver al Menú Principal</button>
        </div>  
      </form>
    </div>
  );
};

export default FinanciarPrestamo;
