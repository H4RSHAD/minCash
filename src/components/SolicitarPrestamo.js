import React, { useState } from 'react';
import { web3, contract } from '../contract';

const SolicitarPrestamo = () => {
  const [monto, setMonto] = useState('');
  const [tasaInteres, setTasaInteres] = useState('');
  const [plazo, setPlazo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si web3 está disponible
    if (!web3 || !contract) {
      console.error('web3 o el contrato no están inicializados correctamente');
      alert('Hubo un problema al conectar con la blockchain. Por favor, verifica que Metamask esté instalado y conectado.');
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        console.error('No hay cuentas disponibles');
        alert('No se encontraron cuentas. Asegúrate de estar conectado a Metamask.');
        return;
      }

      await contract.methods.solicitarPrestamo(monto, tasaInteres, plazo).send({ from: accounts[0] });
      alert('Solicitud de préstamo enviada con éxito');
    } catch (error) {
      console.error('Error al solicitar el préstamo:', error);
      alert('Ocurrió un error al solicitar el préstamo. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div>
      <h2>Solicitar Préstamo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto:</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tasa de Interés:</label>
          <input
            type="number"
            value={tasaInteres}
            onChange={(e) => setTasaInteres(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Plazo (días):</label>
          <input
            type="number"
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
};

export default SolicitarPrestamo;
