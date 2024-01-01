import Controls from "./Controls";
import ResumePreviewer from "./ResumePreviewer";
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