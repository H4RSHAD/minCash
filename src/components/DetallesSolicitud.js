import React, { useState, useEffect } from 'react';
import { web3, contract } from '../contract';
import './DetallesSolicitud.css';

const DetallesSolicitud = () => {
  const [idSolicitud, setIdSolicitud] = useState('');
  const [solicitud, setSolicitud] = useState(null);

  const fetchDetalles = async () => {
    const detalles = await contract.methods.obtenerDetallesSolicitud(idSolicitud).call();
    setSolicitud(detalles);
  };

  useEffect(() => {
    if (idSolicitud) {
      fetchDetalles();
    }
  }, [idSolicitud]);

  return (
    <div className="detalles-solicitud-container">
      <h2>Detalles de Solicitud</h2>
      <div className="form-group">
        <input
          type="number"
          value={idSolicitud}
          onChange={(e) => setIdSolicitud(e.target.value)}
          placeholder="ID Solicitud"
          className="input-id"
        />
        <button onClick={fetchDetalles} className="submit-button">Obtener Detalles</button>
      </div>
      {solicitud && (
        <div className="detalles-container">
          <p><strong>ID:</strong> {solicitud.id}</p>
          <p><strong>Prestatario:</strong> {solicitud.prestatario}</p>
          <p><strong>Monto:</strong> {solicitud.monto}</p>
          <p><strong>Tasa de Interés:</strong> {solicitud.tasaInteres}%</p>
          <p><strong>Plazo:</strong> {solicitud.plazo} días</p>
          <p><strong>Financiado:</strong> {solicitud.financiado ? 'Sí' : 'No'}</p>
          <p><strong>Pagado:</strong> {solicitud.pagado ? 'Sí' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default DetallesSolicitud;
