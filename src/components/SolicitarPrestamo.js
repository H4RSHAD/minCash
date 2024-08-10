import React, { useState } from 'react';
import { web3, contract } from '../contract';

const SolicitarPrestamo = () => {
  const [monto, setMonto] = useState('');
  const [tasaInteres, setTasaInteres] = useState('');
  const [plazo, setPlazo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.solicitarPrestamo(monto, tasaInteres, plazo).send({ from: accounts[0] });
  };

  return (
    <div>
      <h2>Solicitar Préstamo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto:</label>
          <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} required />
        </div>
        <div>
          <label>Tasa de Interés:</label>
          <input type="number" value={tasaInteres} onChange={(e) => setTasaInteres(e.target.value)} required />
        </div>
        <div>
          <label>Plazo (días):</label>
          <input type="number" value={plazo} onChange={(e) => setPlazo(e.target.value)} required />
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
};

export default SolicitarPrestamo;
