import React, { useState } from 'react';
import { web3, contract } from '../contract';

const FinanciarPrestamo = () => {
  const [idSolicitud, setIdSolicitud] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.financiarPrestamo(idSolicitud).send({ from: accounts[0], value: monto });
  };

  return (
    <div>
      <h2>Financiar Préstamo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Solicitud:</label>
          <input type="number" value={idSolicitud} onChange={(e) => setIdSolicitud(e.target.value)} required />
        </div>
        <div>
          <label>Monto (en ETH/AVAX):</label>
          <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} required />
        </div>
        <button type="submit">Financiar</button>
      </form>
    </div>
  );
};

export default FinanciarPrestamo;
