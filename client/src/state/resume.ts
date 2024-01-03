import { createSignal } from "solid-js";
import { defaultApplicationState } from ".";

export const [resumeSkills, setResumeSkills] = createSignal(defaultApplicationState.resume.skills);
export const [resumeExperiences, setResumeExperiences] = createSignal(defaultApplicationState.resume.experiences);
export const [resumeEducation, setResumeEducaton] = createSignal(defaultApplicationState.resume.education);