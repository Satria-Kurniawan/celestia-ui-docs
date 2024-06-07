import * as React from "react";
import { HamburgerMenu } from "celestia-ui";
import { sourceCodeHamburgerMenu } from "../../../constants/exampleComponents";
import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Showcase from "../../../components/ui/Showcase";

export default function ExampleHamburgerMenuPage() {
  const [active, setActive] = React.useState<boolean>(false);

  const menus = [
    { name: "Components", path: "/docs/components" },
    { name: "Hamburger Menu", path: "/docs/components/hamburger" },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Hamburger Menu" />
      <br />
      <Showcase sourceCode={sourceCodeHamburgerMenu}>
        <div className="flex flex-wrap justify-center gap-3">
          <HamburgerMenu variant="2" active={active} setActive={setActive} />
          <HamburgerMenu variant="3" active={active} setActive={setActive} />
          <HamburgerMenu variant="4" active={active} setActive={setActive} />
          <HamburgerMenu variant="5" active={active} setActive={setActive} />
        </div>
      </Showcase>
    </main>
  );
}
