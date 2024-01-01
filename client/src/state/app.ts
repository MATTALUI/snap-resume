import { createSignal } from "solid-js";
import { defaultApplicationState } from ".";

export const [allSkills, setAllSkills] = createSignal(defaultApplicationState.allSkills);