import Web3 from "web3";

const accessToken = process.env.INFURA_ACCESS_TOKEN;

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running.

  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server(SSR) *OR* the user is not running metamask
  console.log("access token?", process.env.INFURA_ACCESS_TOKEN);
  console.log(
    "url",
    `https://rinkeby.infura.io/v3/${process.env.INFURA_ACCESS_TOKEN}`
  );
  const provider = new Web3.providers.HttpProvider(
    `https://rinkeby.infura.io/v3/${process.env.INFURA_ACCESS_TOKEN}`
  );

  web3 = new Web3(provider);
}

export default web3;
