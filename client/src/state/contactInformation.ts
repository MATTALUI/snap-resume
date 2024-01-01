import { createSignal } from "solid-js";
import { defaultApplicationState } from ".";
import { ContactInformation } from "../types";

export const [contactFirstName, setContactFirstName] =
  createSignal<ContactInformation["firstName"]>(defaultApplicationState.resume.contactInformation.firstName);
export const [contactLastName, setContactLastName] =
  createSignal<ContactInformation["lastName"]>(defaultApplicationState.resume.contactInformation.lastName);
export const [contactTitle, setContactTitle] =
  createSignal<ContactInformation["title"]>(defaultApplicationState.resume.contactInformation.title);
export const [contactEmail, setContactEmail] =
  createSignal<ContactInformation["email"]>(defaultApplicationState.resume.contactInformation.email);
export const [contactSocials, setContactSocials] =
  createSignal<ContactInformation["socials"]>(defaultApplicationState.resume.contactInformation.socials);
export const [contactLocation, setContactLocation] =
  createSignal<ContactInformation["location"]>(defaultApplicationState.resume.contactInformation.location);