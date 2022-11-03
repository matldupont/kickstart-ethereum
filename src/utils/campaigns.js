import factory from "../../ethereum/factory";
import getCampaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";

export const CAMPAIGNS_KEY = "deployed-campaigns";

export async function getCampaigns() {
  return await factory.methods.getDeployedCampaigns().call();
}

export async function getCampaignSummary(address) {
  console.log("getCampaign", getCampaign(address));
  return getCampaign(address);
  // return await getCampaign(address).methods.getDeployedCampaigns().call();
}

export async function createCampaign(minContribution) {
  const accounts = await web3.eth.getAccounts();
  return await factory.methods
    .createCampaign(minContribution)
    .send({ from: accounts[0] });
}
