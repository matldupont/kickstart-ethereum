import { useMutation, useQuery } from "react-query";
import {
  CAMPAIGNS_KEY,
  getCampaigns,
  createCampaign,
} from "../utils/campaigns";

export function useCampaigns(initialCampaigns = []) {
  return useQuery(CAMPAIGNS_KEY, getCampaigns, {
    initialData: initialCampaigns,
  });
}

export function useCreateCampaign() {
  return useMutation(createCampaign);
}
