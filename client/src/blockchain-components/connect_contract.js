import { ethers } from "ethers";


const contract_abi = [

]


const contract_address = ""

// provider
// signer
//contract

const provider = new ethers.provider.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contract_abi,contract_address,signer);

export { provider, contract };