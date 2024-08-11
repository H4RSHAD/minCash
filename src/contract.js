import Web3 from 'web3';
import { CONTRACT_ADDRESS, ABI, NETWORK_URL } from './config'; // Asegúrate de que la ruta a config.js sea correcta

let web3;
let contract;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Metamask está disponible
  web3 = new Web3(window.ethereum);

  // Solicita acceso a la cuenta de usuario en Metamask
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(() => {
      console.log('Conectado a Metamask');
    })
    .catch((err) => {
      console.error('Error al solicitar cuentas de usuario:', err);
    });

  // Crear la instancia del contrato
  contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
} else {
  // No hay proveedor de Ethereum disponible en el navegador, utiliza la URL de la red
  web3 = new Web3(new Web3.providers.HttpProvider(NETWORK_URL));
  
  // Crear la instancia del contrato
  contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  
  console.warn('Metamask no está disponible. Conectado a la red de prueba a través de HTTP Provider.');
}

export { web3, contract };
