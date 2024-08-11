export const CONTRACT_ADDRESS = '0x94036C419CCe3940F41558DF6bf2d4B57f3c9557';
export const ABI = [
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "idSolicitud",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "financiador",
		  "type": "address"
		}
	  ],
	  "name": "PrestamoFinanciado",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "idSolicitud",
		  "type": "uint256"
		}
	  ],
	  "name": "PrestamoPagado",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "idSolicitud",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "prestatario",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "monto",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "tasaInteres",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "plazo",
		  "type": "uint256"
		}
	  ],
	  "name": "SolicitudPrestamoCreada",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "idSolicitud",
		  "type": "uint256"
		}
	  ],
	  "name": "financiarPrestamo",
	  "outputs": [],
	  "stateMutability": "payable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "idSolicitud",
		  "type": "uint256"
		}
	  ],
	  "name": "obtenerDetallesSolicitud",
	  "outputs": [
		{
		  "components": [
			{
			  "internalType": "uint256",
			  "name": "id",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "prestatario",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "monto",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "tasaInteres",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "plazo",
			  "type": "uint256"
			},
			{
			  "internalType": "bool",
			  "name": "financiado",
			  "type": "bool"
			},
			{
			  "internalType": "bool",
			  "name": "pagado",
			  "type": "bool"
			}
		  ],
		  "internalType": "struct MicroPrestamo.SolicitudPrestamo",
		  "name": "",
		  "type": "tuple"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "usuario",
		  "type": "address"
		}
	  ],
	  "name": "obtenerPrestamosUsuario",
	  "outputs": [
		{
		  "internalType": "uint256[]",
		  "name": "",
		  "type": "uint256[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "idSolicitud",
		  "type": "uint256"
		}
	  ],
	  "name": "pagarPrestamo",
	  "outputs": [],
	  "stateMutability": "payable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "prestamosUsuario",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "siguienteIdSolicitud",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "monto",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "tasaInteres",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "plazo",
		  "type": "uint256"
		}
	  ],
	  "name": "solicitarPrestamo",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "solicitudes",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		},
		{
		  "internalType": "address",
		  "name": "prestatario",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "monto",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "tasaInteres",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "plazo",
		  "type": "uint256"
		},
		{
		  "internalType": "bool",
		  "name": "financiado",
		  "type": "bool"
		},
		{
		  "internalType": "bool",
		  "name": "pagado",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	}
  ]; 
export const NETWORK_URL = 'https://api.avax-test.network/ext/bc/C/rpc'; // URL de la red de Avalanche Testnet (o Rinkeby para Ethereum)
