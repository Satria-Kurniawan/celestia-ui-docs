import { useScreen } from "../../../hooks/useScreen";
import { Card } from "celestia-ui";
import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Showcase from "../../../components/ui/Showcase";
import { sourceCodeCard } from "../../../constants/exampleComponents";

export default function ExampleCardPage() {
  const { isDesktop, isTablet } = useScreen();

  const menus = [
    { name: "Components", path: "/docs/components" },
    { name: "Card", path: "/docs/components/card" },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Card" />
      <br />
      <Showcase sourceCode={sourceCodeCard}>
        <div
          className={`grid gap-3 ${
            isDesktop ? "grid-cols-3" : isTablet ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <Card>
            <Card.Title title="Lorem" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            reprehenderit amet perferendis rerum omnis sequi beatae quod aut
            quae nostrum.
          </Card>
          <Card>
            <Card.Title title="Lorem" />
            <Card.Description
              description="  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            reprehenderit amet perferendis rerum omnis sequi beatae quod aut
            quae nostrum."
            />
          </Card>
          <Card>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            reprehenderit amet perferendis rerum omnis sequi beatae quod aut
            quae nostrum.
          </Card>
        </div>
      </Showcase>
    </main>
  );
}
