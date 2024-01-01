import Controls from "./Controls.component";
import ResumePreviewer from "./ResumePreviewer.component";
import styles from "./SnapResume.module.scss";

const SnapResume = () => {
  return (
    <>
      <nav class={styles.nav}>
        <h1>Snap Resume</h1>
      </nav>
      <ResumePreviewer />
      <Controls />
    </>
  );
}

export default SnapResume;