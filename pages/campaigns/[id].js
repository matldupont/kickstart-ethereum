import { useRouter } from "next/router";

export default function CampaignDetailsPage(props) {
  const {
    query: { id },
  } = useRouter();
  console.log(id);
  return <div>Campaign details for {id}</div>;
}
