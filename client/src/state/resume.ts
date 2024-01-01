import { createSignal } from "solid-js";
import { defaultApplicationState } from ".";

export const [resumeSkills, setResumeSkills] = createSignal(defaultApplicationState.resume.skills);