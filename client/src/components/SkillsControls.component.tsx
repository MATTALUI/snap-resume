import { For } from "solid-js";
import ControlCollapse from "./ControlCollapse.component";
import SkillItem from "./SkillItem.component";
import { allSkills } from "../state/app";
import SkillCreator from "./SkillCreator.component";

const SkillsControls = () => {
  return (
    <ControlCollapse
      title="Skills"
      defaultOpen
    >
      <SkillCreator />
      <For each={allSkills()}>
        {(item) => <SkillItem item={item} />}
      </For>
    </ControlCollapse>
  );
}

export default SkillsControls