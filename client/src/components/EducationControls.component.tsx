import { For, Show, createSignal } from "solid-js";
import { allEducation } from "../state/app";
import ControlCollapse from "./ControlCollapse.component";
import EducationItem from "./EducationItem.component";
import { Education } from "../types";
import EducationCreator from "./EducationCreator.component";

const EducationControls = () => {
  const [formEducation, setFormEducation] = createSignal<Partial<Education> | null>({});

  return (
    <ControlCollapse
      title="Education"
      defaultOpen
    >
      <Show when={!!formEducation()}>
        <EducationCreator education={formEducation()!} />
      </Show>
      <Show when={!formEducation()}>
        <>
          <For each={allEducation()}>
            {(item) => <EducationItem item={item} />}
          </For>
        </>
      </Show>
    </ControlCollapse>
  );
}

export default EducationControls