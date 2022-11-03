import { useRouter } from "next/router";
import { getCampaignSummary } from "../../src/utils/campaigns";

export default function CampaignDetailsPage(props) {
  const {
    query: { address },
  } = useRouter();
  console.log(address);
  return <div>Campaign details for {address}</div>;
}

export async function getServerSideProps(ctx) {
  const { address } = ctx.query;
  return {
    props: {
      initialCampaign: await getCampaignSummary(address),
    },
  };
}
