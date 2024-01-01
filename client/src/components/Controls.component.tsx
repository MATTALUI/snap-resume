
import ContactInfoControls from "./ContactInfoControls.component";
import styles from "./Controls.module.scss";
import EducationControls from "./EducationControls.component";
import ExperienceControls from "./ExperienceControls.component";
import OptionsControls from "./OptionsControls.component";
import PresetsControls from "./PresetsControls.component";
import SkillsControls from "./SkillsControls.component";

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