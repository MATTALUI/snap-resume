
import ContactInfoControls from "./ContactInfoControls";
import styles from "./Controls.module.scss";
import EducationControls from "./EducationControls";
import ExperienceControls from "./ExperienceControls";
import OptionsControls from "./OptionsControls";
import PresetsControls from "./PresetsControls";
import SkillsControls from "./SkillsControls";

const Controls = () => {
  return (
    <main class={styles.container}>
      <ContactInfoControls />
      <ExperienceControls />
      <SkillsControls />
      <EducationControls />
      <PresetsControls />
      <OptionsControls />
    </main>
  );
}

export default Controls;