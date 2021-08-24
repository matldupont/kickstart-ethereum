import * as React from "react";
import { useRouter } from "next/router";
import { Form, Button, Input, Message } from "semantic-ui-react";
import { useCreateCampaign } from "../../src/hooks/campaigns";

export default function NewCampaignPage() {
  const router = useRouter();
  const [minContribution, setMinContribution] = React.useState("");
  const { mutate: createCampaign, error, isLoading } = useCreateCampaign();
  function onSubmit(event) {
    event.preventDefault();
    createCampaign(minContribution, { onSuccess: () => router.push("/") });
  }

  return (
    <div>
      <h1>Create a Campaign</h1>
      <Form error={!!error} onSubmit={onSubmit}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minContribution}
            onChange={(e) => setMinContribution(e.target.value)}
          />
        </Form.Field>
        <Button primary type="submit" loading={isLoading}>
          Create
        </Button>

        <Message error>
          <Message.Header>
            There was a problem creating your campaign
          </Message.Header>
          <p>{error?.message}</p>
        </Message>
      </Form>
    </div>
  );
}
