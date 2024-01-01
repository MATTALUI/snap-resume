import { AppState, ContactInformation, LocalStorageKeys, Resume, ResumeTheme } from "../types";

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

export const defaultApplicationState: AppState = {
  resume: loadPersistedResume(),
  allExperiences: safeLoadLocalStorage<AppState["allExperiences"]>(LocalStorageKeys.Resume, []),
  allSkills: safeLoadLocalStorage<AppState["allSkills"]>(LocalStorageKeys.Resume, []),
  allEducation: safeLoadLocalStorage<AppState["allEducation"]>(LocalStorageKeys.Resume, []),
  allPresets: safeLoadLocalStorage<AppState["allPresets"]>(LocalStorageKeys.Resume, []),
  options: safeLoadLocalStorage<AppState["options"]>(LocalStorageKeys.Resume, {}),
};