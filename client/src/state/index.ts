import { AppState, ContactInformation, IdentifiedString, LocalStorageKeys, Resume, ResumeTheme } from "../types";

export const safeLoadLocalStorage = <T>(key: LocalStorageKeys, defaultValue: T) => {
  try {
    const value: T = JSON.parse(localStorage.getItem(key) || "");
    return value;
  } catch (e) {
    return defaultValue;
  }
}

const loadPersistedResume = () =>
  safeLoadLocalStorage<AppState["resume"]>(LocalStorageKeys.Resume, defaultResume);

export const updatePersistedResume = (updates: Partial<Resume>) => {
  const resume = loadPersistedResume();
  Object.assign(resume, updates);
  localStorage.setItem(LocalStorageKeys.Resume, JSON.stringify(resume));
}

export const updatePersistedContactInformation = (updates: Partial<Resume["contactInformation"]>) => {
  const { contactInformation } = loadPersistedResume();
  Object.assign(contactInformation, updates);
  updatePersistedResume({ contactInformation });
}

export const updatePersistedAllSkills = (skills: IdentifiedString[]) => {
  localStorage.setItem(LocalStorageKeys.Skills, JSON.stringify(skills));
}

(window as any).__reset = () => {
  localStorage.removeItem(LocalStorageKeys.Resume);
  localStorage.removeItem(LocalStorageKeys.Experiences);
  localStorage.removeItem(LocalStorageKeys.Skills);
  localStorage.removeItem(LocalStorageKeys.Education);
  localStorage.removeItem(LocalStorageKeys.Presets);
  localStorage.removeItem(LocalStorageKeys.Options);
}

const defaultContactInfo: ContactInformation = {
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  socials: [],
  location: "",
};

const defaultResume: Resume = {
  theme: ResumeTheme.Romania,
  contactInformation: defaultContactInfo,
  experiences: [],
  skills: [],
  education: [],
}

const defaultSkills:IdentifiedString[] = [
  { id: crypto.randomUUID(), value: "React.js" },
  { id: crypto.randomUUID(), value: "Solid.js" },
  { id: crypto.randomUUID(), value: "Climbing Trees" },
  { id: crypto.randomUUID(), value: "Node.js" },
];

export const defaultApplicationState: AppState = {
  resume: loadPersistedResume(),
  allExperiences: safeLoadLocalStorage<AppState["allExperiences"]>(LocalStorageKeys.Resume, []),
  allSkills: safeLoadLocalStorage<AppState["allSkills"]>(LocalStorageKeys.Skills, defaultSkills),
  allEducation: safeLoadLocalStorage<AppState["allEducation"]>(LocalStorageKeys.Education, []),
  allPresets: safeLoadLocalStorage<AppState["allPresets"]>(LocalStorageKeys.Presets, []),
  options: safeLoadLocalStorage<AppState["options"]>(LocalStorageKeys.Options, {}),
};