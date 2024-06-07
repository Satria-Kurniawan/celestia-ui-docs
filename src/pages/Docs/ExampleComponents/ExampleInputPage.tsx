import { TextInput } from "celestia-ui";
import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Showcase from "../../../components/ui/Showcase";
import { sourceCodeTextInput } from "../../../constants/exampleComponents";

export default function ExampleInputPage() {
  const menus = [
    { name: "Components", path: "/docs/components" },
    { name: "Text Input", path: "/docs/components/card" },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Text Input" />
      <br />
      <Showcase sourceCode={sourceCodeTextInput}>
        <div className="flex flex-wrap justify-center gap-3">
          <TextInput type="email" label="Email" placeholder="Email" />
          <TextInput type="password" label="Password" placeholder="Password" />
        </div>
      </Showcase>
    </main>
  );
}
