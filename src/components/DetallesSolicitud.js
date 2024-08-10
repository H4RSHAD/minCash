import React, { useState, useEffect } from 'react';
import { web3, contract } from '../contract';

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
    <div>
      <h2>Detalles de Solicitud</h2>
      <input type="number" value={idSolicitud} onChange={(e) => setIdSolicitud(e.target.value)} placeholder="ID Solicitud" />
      <button onClick={fetchDetalles}>Obtener Detalles</button>
      {solicitud && (
        <div>
          <p>ID: {solicitud.id}</p>
          <p>Prestatario: {solicitud.prestatario}</p>
          <p>Monto: {solicitud.monto}</p>
          <p>Tasa de Interés: {solicitud.tasaInteres}%</p>
          <p>Plazo: {solicitud.plazo} días</p>
          <p>Financiado: {solicitud.financiado ? 'Sí' : 'No'}</p>
          <p>Pagado: {solicitud.pagado ? 'Sí' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default DetallesSolicitud;
