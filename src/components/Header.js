import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export function Header() {
  const router = useRouter();
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item
        name="browse"
        // active={activeItem === "browse"}
        // onClick={this.handleItemClick}
      >
        Kickstart Ethereum
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="signup"
          // active={activeItem === "signup"}
          // onClick={this.handleItemClick}
        >
          Campaigns
        </Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
