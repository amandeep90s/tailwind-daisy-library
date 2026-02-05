import { Button, Dropdown, DropdownMenu } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function DropdownMenuPage() {
  return (
    <ComponentPage
      title="Dropdown Menu"
      description="Displays a menu to the user triggered by a button click."
    >
      <ShowcaseSection title="Default">
        <Dropdown trigger={<Button>Open Menu</Button>}>
          <DropdownMenu>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Billing</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </DropdownMenu>
        </Dropdown>
      </ShowcaseSection>

      <ShowcaseSection title="Positions">
        <Dropdown trigger={<Button>Bottom</Button>} position="bottom">
          <DropdownMenu>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </DropdownMenu>
        </Dropdown>
        <Dropdown trigger={<Button>Top</Button>} position="top">
          <DropdownMenu>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </DropdownMenu>
        </Dropdown>
        <Dropdown trigger={<Button>End</Button>} position="end">
          <DropdownMenu>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </DropdownMenu>
        </Dropdown>
      </ShowcaseSection>

      <ShowcaseSection title="Hover">
        <Dropdown trigger={<Button>Hover Me</Button>} hover>
          <DropdownMenu>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </DropdownMenu>
        </Dropdown>
      </ShowcaseSection>
    </ComponentPage>
  );
}
