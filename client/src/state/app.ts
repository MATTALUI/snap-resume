import { createSignal } from "solid-js";
import { defaultApplicationState } from ".";

export const [allSkills, setAllSkills] =
  createSignal(defaultApplicationState.allSkills);
export const [allExperiences, setAllExperiences] =
  createSignal(defaultApplicationState.allExperiences);
export const [allEducation, setAllEducation] =
  createSignal(defaultApplicationState.allEducation);