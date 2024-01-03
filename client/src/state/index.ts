import { AppState, ContactInformation, Education, Experience, IdentifiedString, LocalStorageKeys, Resume, ResumeTheme } from "../types";

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

export const updatePersistedAllExperiences = (experiences: Experience[]) => {
  localStorage.setItem(LocalStorageKeys.Experiences, JSON.stringify(experiences));
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

const defaultExperiences:Experience[] = [
  {
    id: crypto.randomUUID(),
    company: "MATTALUI.IO",
    title: "King of it All",
    dates: "1995-Present",
    bullets: [
      { id: crypto.randomUUID(), value: "Took care of business" },
      { id: crypto.randomUUID(), value: "Partied hearty" },
    ]
  },
  {
    id: crypto.randomUUID(),
    company: "Snap Resume",
    title: "CEO",
    dates: "2023-Present",
    bullets: [
      { id: crypto.randomUUID(), value: "Built Snap resume" },
      { id: crypto.randomUUID(), value: "used Solidjs" },
    ]
  },
];

const defaultEducation:Education[] = [
  {
    id: crypto.randomUUID(),
    institution: "BYUI",
    degree: "Applied Technology",
  },
  {
    id: crypto.randomUUID(),
    institution: "Galvanize",
    degree: "Web Development",
  },
];

export const defaultApplicationState: AppState = {
  resume: loadPersistedResume(),
  allExperiences: safeLoadLocalStorage<AppState["allExperiences"]>(LocalStorageKeys.Experiences, defaultExperiences),
  allSkills: safeLoadLocalStorage<AppState["allSkills"]>(LocalStorageKeys.Skills, []),
  allEducation: safeLoadLocalStorage<AppState["allEducation"]>(LocalStorageKeys.Education, defaultEducation),
  allPresets: safeLoadLocalStorage<AppState["allPresets"]>(LocalStorageKeys.Presets, []),
  options: safeLoadLocalStorage<AppState["options"]>(LocalStorageKeys.Options, {}),
};