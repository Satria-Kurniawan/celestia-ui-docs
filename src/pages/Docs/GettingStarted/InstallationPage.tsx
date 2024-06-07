import ListCollumn from "../../../components/ui/ListCollumn";
import ListItem from "../../../components/ui/ListItem";
import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Syntax from "../../../components/ui/Syntax";

export default function InstallationPage() {
  const menus = [
    { name: "Getting Started", path: "/docs" },
    { name: "Installation", path: "/docs/getting-started/installation" },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Installation" />
      <br />
      <article>
        <ListCollumn title="System Requirements:">
          <ListItem
            textLink="Node.js 18.17 "
            text="or later."
            url="https://nodejs.org/en"
          />
          <ListItem
            textLink="React.js 18.2.0 "
            text="or later."
            url="https://react.dev/"
          />
        </ListCollumn>
        <br />
        <p className="mb-2">Run: </p>
        <Syntax language="powershell" code="npm i celestia-ui" />
        <br />
        <p className="mb-2">
          Don`t forget to add style.css in the root directory, and start using
          components.
        </p>
        <Syntax
          title="Code"
          language="powershell"
          code={`import "celestia-ui/dist/style.css";`}
        />
        <br />
      </article>
    </main>
  );
}
