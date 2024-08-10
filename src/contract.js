import Web3 from 'web3';
import { CONTRACT_ADDRESS, ABI, NETWORK_URL } from './config';

let web3;
let contract;

const initWeb3 = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(NETWORK_URL));
  }
  contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
};

export { web3, contract, initWeb3 };
