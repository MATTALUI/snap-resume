import ControlCollapse from "./ControlCollapse.component";
import styles from "./ContactInfoControls.module.scss";
import { contactEmail, contactFirstName, contactLastName, contactLocation, contactSocials, contactTitle, setContactEmail, setContactFirstName, setContactLastName, setContactLocation, setContactSocials, setContactTitle } from "../state/contactInformation";
import { JSX } from "solid-js";
import { updatePersistedContactInformation } from "../state";
import { ContactInformation } from "../types";

type InputHandler = JSX.ChangeEventHandler<HTMLInputElement, Event>;

const ContactInfoControls = () => {
  const updateContactKey =
    (key: keyof ContactInformation, setter: Function): InputHandler =>
      (event) => {
        const value = event.target.value;
        setter(value);
        updatePersistedContactInformation({ [key]: value });
      }

  const updateSocials: InputHandler = (event) => {
    // This is a special case because right now we only allow one social media
    // link, but we want to expand this. It should always be an array of one.
    const socials = contactSocials();
    if (!socials.length) socials.push({ id: crypto.randomUUID(), value: "" });
    socials[0].value = event.target.value;
    setContactSocials(socials);
    updatePersistedContactInformation({ socials });
  }

  return (
    <ControlCollapse
      title="Contact Information"
    >
      <div class={styles.inputSection}>
        <label>First Name</label>
        <input
          type="text"
          value={contactFirstName()}
          onChange={updateContactKey("firstName", setContactFirstName)}
        />
      </div>
      <div class={styles.inputSection}>
        <label>Last Name</label>
        <input
          type="text"
          value={contactLastName()}
          onChange={updateContactKey("lastName", setContactLastName)}
        />
      </div>
      <div class={styles.inputSection}>
        <label>Title</label>
        <input
          type="text"
          value={contactTitle()}
          onChange={updateContactKey("title", setContactTitle)}
        />
      </div>
      <div class={styles.inputSection}>
        <label>Email</label>
        <input
          type="text"
          value={contactEmail()}
          onChange={updateContactKey("email", setContactEmail)}
        />
      </div>
      <div class={styles.inputSection}>
        <label>Social Media</label>
        <input
          type="text"
          value={contactSocials()[0]?.value || ""}
          onChange={updateSocials}
        />
      </div>
      <div class={styles.inputSection}>
        <label>Location</label>
        <input
          type="text"
          value={contactLocation()}
          onChange={updateContactKey("location", setContactLocation)}
        />
      </div>
    </ControlCollapse>
  );
}

export default ContactInfoControls