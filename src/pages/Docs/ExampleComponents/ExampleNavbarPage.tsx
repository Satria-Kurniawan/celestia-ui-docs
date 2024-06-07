import { Button, Navbar } from "celestia-ui";
import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Showcase from "../../../components/ui/Showcase";
import { sourceCodeNavbar } from "../../../constants/exampleComponents";

export default function ExampleNavbarPage() {
  const menus = [
    { name: "Components", path: "/docs/components" },
    { name: "Navbar", path: "/docs/components/navbar" },
  ];

  const exampleNavbarMenus = [
    {
      name: "Menu",
      path: "/",
    },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Navbar" />
      <br />
      <Showcase sourceCode={sourceCodeNavbar}>
        <Navbar
          brand={<span className="font-bold italic">CelestiaUI</span>}
          menus={exampleNavbarMenus}
          cta={
            <>
              <Button variant="OUTLINED" text="Sign Up" />
              <Button variant="CONTAINED" text="Sign In" />
            </>
          }
        />
      </Showcase>
    </main>
  );
}
