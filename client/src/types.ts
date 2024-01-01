export type AppState = {
  resume: Resume;
  allExperiences: Experience[];
  allSkills: IdentifiedString[];
  allEducation: Education[];
  allPresets: Preset[];
  options: AppOptions;
};

export type Resume = {
  theme: ResumeTheme;
  contactInformation: ContactInformation;
  experiences: Experience[];
  skills: IdentifiedString[];
  education: Education[];
};

export enum ResumeTheme {
  Romania = "Romania",
};

export type ContactInformation = {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  socials: IdentifiedString[];
  location: string;
};

export type Experience = {
  id: string;
  company: string;
  title: string;
  dates: string;
  bullets: IdentifiedString[];
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
};

export type IdentifiedString = {
  id: string;
  value: string;
}

export type Preset = {

};

export type AppOptions = {

};

export enum LocalStorageKeys {
  Resume = "SNAPRESUME::RESUME",
  Experiences = "SNAPRESUME::EXPERIENCES",
  Skills = "SNAPRESUME::SKILLS",
  Education = "SNAPRESUME::EDUCATION",
  Presets = "SNAPRESUME::PRESETS",
  Options = "SNAPRESUME::OPTIONS",
};