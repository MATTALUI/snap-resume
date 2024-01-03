import { For } from "solid-js";
import ControlCollapse from "./ControlCollapse.component";
import { allExperiences } from "../state/app";
import ExperienceItem from "./ExperienceItem.component";

const ExperienceControls = () => {
  return (
    <ControlCollapse
      title="Experience"
    >
      <For each={allExperiences()}>
        {(item) => <ExperienceItem item={item} />}
      </For>
    </ControlCollapse>
  );
}

export default ExperienceControls