import { Loader } from "celestia-ui";
import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Showcase from "../../../components/ui/Showcase";
import { sourceCodeLoader } from "../../../constants/exampleComponents";

export default function ExampleLoaderPage() {
  const menus = [
    { name: "Components", path: "/docs/components" },
    { name: "Loader", path: "/docs/components/loader" },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Loader" />
      <br />
      <Showcase sourceCode={sourceCodeLoader}>
        <div className="flex flex-wrap justify-center gap-20">
          <Loader variant="1" />
          <Loader variant="2" />
          <Loader variant="3" />
          <Loader variant="4" />
        </div>
      </Showcase>
    </main>
  );
}
