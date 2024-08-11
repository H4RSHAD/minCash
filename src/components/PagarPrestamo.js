import React, { useState } from 'react';
import { web3, contract } from '../contract';
import './PagarPrestamo.css';

const PagarPrestamo = () => {
  const [idSolicitud, setIdSolicitud] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.pagarPrestamo(idSolicitud).send({ from: accounts[0], value: monto });
  };


  const handleBack = () => {
    window.history.back();
  };


  return (
    <div className="pagar-prestamo-container">
      <h2>Pagar Préstamo</h2>
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
        <button type="submit" className="submit-button">Pagar</button>
        <button type="button" className="back-button" onClick={handleBack}>Volver al Menú Principal</button>
      </form>
    </div>
  );
};

export default PagarPrestamo;
