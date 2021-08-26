import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

export function Header() {
  // const router = useRouter();
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link
        href="/"
        // active={activeItem === "browse"}
        // onClick={this.handleItemClick}
      >
        <a className="item">Kickstart Ethereum</a>
      </Link>

      <Menu.Menu position="right">
        <Link href="/">
          <a className="item">Campaigns</a>
        </Link>
        <Link href="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
