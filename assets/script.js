// Moralis setup...
const serverUrl = "https://ov0zft8bmuyj.usemoralis.com:2053/server";
const appId = "D6k8tZGdwfnssgTFi33EKvORsT7m8V7vfsHP82nl";
Moralis.start({ serverUrl, appId });

// RPC speedy-nodes & Web3... 

const NODE_URL = "https://speedy-nodes-nyc.moralis.io/dd08b911fb86268af02f8642/eth/ropsten"; 
const provider = new Web3.providers.HttpProvider(NODE_URL); 
const web3 = new Web3(provider);

// Smart Contract.......

const abi = [ 	{ 		"inputs": [], 		"name": "getVal", 		"outputs": [ 			{ 				"internalType": "string", 				"name": "", 				"type": "string" 			} 		], 		"stateMutability": "view", 		"type": "function" 	}, 	{ 		"inputs": [], 		"name": "hash", 		"outputs": [ 			{ 				"internalType": "string", 				"name": "", 				"type": "string" 			} 		], 		"stateMutability": "view", 		"type": "function" 	}, 	{ 		"inputs": [ 			{ 				"internalType": "string", 				"name": "_hash", 				"type": "string" 			} 		], 		"name": "setVal", 		"outputs": [], 		"stateMutability": "nonpayable", 		"type": "function" 	} ]

const addr = "0xfFfaA6F728Faa991A3FB7Da91C3F0331f7A838ba"

const contract = new web3.eth.Contract(abi, addr)

// Cypto-JS...

const fiv = 'yourivare1234567'
const fkey = '356d9abc7532ceb0945b615a622oc377'
const key = CryptoJS.enc.Utf8.parse(fkey);
const iv = CryptoJS.enc.Utf8.parse(fiv);

// Pre-Loader...

document.onreadystatechange = function() {
if (document.readyState !== "complete") {
document.querySelector(
"body").style.visibility = "hidden";
document.querySelector(
"#loader").style.visibility ="visible";
} else {
document.querySelector(
"#loader").style.display = "none";
document.querySelector(
"body").style.visibility = "visible";
}}