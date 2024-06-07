import { Button } from "celestia-ui";
import Navpath from "../../../components/ui/Navpath";
import SectionTitle from "../../../components/ui/SectionTitle";
import Showcase from "../../../components/ui/Showcase";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import {
  sourceCodeButtonContained,
  sourceCodeButtonContainedWithIcon,
  sourceCodeButtonOutlined,
  sourceCodeButtonOutlinedWithIcon,
} from "../../../constants/exampleComponents";

export default function ExampleButtonPage() {
  const menus = [
    { name: "Components", path: "/docs/components" },
    { name: "Button", path: "/docs/components/button" },
  ];

  return (
    <main>
      <Navpath menus={menus} />
      <br />
      <SectionTitle text="Button" />
      <br />
      <Showcase title="Variant Outlined" sourceCode={sourceCodeButtonOutlined}>
        <div className="flex flex-wrap justify-center gap-3">
          <Button text="Primary Outlined" variant="OUTLINED" color="PRIMARY" />
          <Button text="Purple Outlined" variant="OUTLINED" color="PURPLE" />
          <Button text="Red Outlined" variant="OUTLINED" color="RED" />
          <Button text="Green Outlined" variant="OUTLINED" color="GREEN" />
          <Button text="Blue Outlined" variant="OUTLINED" color="BLUE" />
        </div>
      </Showcase>
      <br />
      <Showcase
        title="Variant Contained"
        sourceCode={sourceCodeButtonContained}
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            text="Primary Contained"
            variant="CONTAINED"
            color="PRIMARY"
          />
          <Button text="Purple Contained" variant="CONTAINED" color="PURPLE" />
          <Button text="Red Contained" variant="CONTAINED" color="RED" />
          <Button text="Green Contained" variant="CONTAINED" color="GREEN" />
          <Button text="Blue Contained" variant="CONTAINED" color="BLUE" />
        </div>
      </Showcase>
      <br />
      <Showcase
        title="Variant Outlined With Icon"
        sourceCode={sourceCodeButtonOutlinedWithIcon}
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            text="Primary Outlined"
            variant="OUTLINED"
            color="PRIMARY"
            rightIcon={<HiMiniArrowLongRight />}
          />
          <Button
            text="Purple Outlined"
            variant="OUTLINED"
            color="PURPLE"
            leftIcon={<HiMiniArrowLongLeft />}
          />
          <Button
            text="Red Outlined"
            variant="OUTLINED"
            color="RED"
            leftIcon={<HiMiniArrowLongLeft />}
            rightIcon={<HiMiniArrowLongRight />}
          />
          <Button
            text="Green Outlined"
            variant="OUTLINED"
            color="GREEN"
            leftIcon={<HiMiniArrowLongLeft />}
          />
          <Button
            text="Blue Outlined"
            variant="OUTLINED"
            color="BLUE"
            rightIcon={<HiMiniArrowLongRight />}
          />
        </div>
      </Showcase>
      <br />
      <Showcase
        title="Variant Contained With Icon"
        sourceCode={sourceCodeButtonContainedWithIcon}
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            text="Primary Contained"
            variant="CONTAINED"
            color="PRIMARY"
            rightIcon={<HiMiniArrowLongRight />}
          />
          <Button
            text="Purple Contained"
            variant="CONTAINED"
            color="PURPLE"
            leftIcon={<HiMiniArrowLongLeft />}
          />
          <Button
            text="Red Contained"
            variant="CONTAINED"
            color="RED"
            leftIcon={<HiMiniArrowLongLeft />}
            rightIcon={<HiMiniArrowLongRight />}
          />
          <Button
            text="Green Contained"
            variant="CONTAINED"
            color="GREEN"
            leftIcon={<HiMiniArrowLongLeft />}
          />
          <Button
            text="Blue Contained"
            variant="CONTAINED"
            color="BLUE"
            rightIcon={<HiMiniArrowLongRight />}
          />
        </div>
      </Showcase>
    </main>
  );
}
