import * as React from "react";
import { Card, Button } from "semantic-ui-react";
import { useCampaigns } from "../src/hooks/campaigns";
import { getCampaigns } from "../src/utils/campaigns";

function CampaignIndex({ initialCampaigns = [] }) {
  const {
    data: campaigns,
    isLoading,
    isError,
    isSuccess,
  } = useCampaigns(initialCampaigns);

  function renderCampaigns() {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  return (
    <div>
      <h1>Open Campaigns</h1>
      <Button
        floated="right"
        content="Create Campaign"
        icon="add circle"
        primary
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading campaigns</p>}
      {isSuccess && renderCampaigns()}
    </div>
  );
}

export default CampaignIndex;

export async function getServerSideProps() {
  return {
    props: {
      initialCampaigns: await getCampaigns(),
    },
  };
}
