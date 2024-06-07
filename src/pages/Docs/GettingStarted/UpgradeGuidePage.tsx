import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Syntax from "../../../components/ui/Syntax";

export default function UpgradeGuidePage() {
  const menus = [
    { name: "Getting Started", path: "/docs" },
    { name: "Upgrade Guide", path: "/docs/upgrade-guide" },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Upgrade Guide" />
      <br />
      <p className="mb-2">Update to latest version: </p>
      <Syntax language="powershell" code="npm i celestia-ui@latest" />
      <br />
      <p>
        The UI library is still in its early version, and an upgrade guide is
        not available at this time.
      </p>
    </main>
  );
}
