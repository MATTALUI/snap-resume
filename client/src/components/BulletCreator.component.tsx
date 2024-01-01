import { AiOutlinePlus } from "solid-icons/ai";
import styles from "./BulletCreator.module.scss";
import { allExperiences, setAllExperiences } from "../state/app";
import { Experience } from "../types";
import { updatePersistedAllExperiences, updatePersistedResume } from "../state";
import { resumeExperiences, setResumeExperiences } from "../state/resume";
interface IBulletCreatorprops {
  experienceId: string;
}
const BulletCreator = (props: IBulletCreatorprops) => {
  let inputRef: HTMLInputElement | undefined;

  const createBullet = () => {
    if (!inputRef || !inputRef.value) return;
    const newBullet = {
      id: crypto.randomUUID(),
      value: inputRef.value,
    };
    const newExperiences: Experience[] = JSON.parse(JSON.stringify(allExperiences()));
    const experience = newExperiences.find(e => e.id === props.experienceId);
    if (!experience) throw new Error("Could not find relevant experience");
    experience.bullets.unshift(newBullet);
    setAllExperiences(newExperiences);
    updatePersistedAllExperiences(newExperiences);
    const resExperiences = resumeExperiences();
    const resumeExperience = resExperiences.find(e => e.id === props.experienceId);
    if (resumeExperience) {
      resumeExperience.bullets.unshift(newBullet);
      setResumeExperiences(resExperiences);
      updatePersistedResume({ experiences: resExperiences });
    }
  }

  const checkEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") createBullet();
  }

  return (
    <div class={styles.creator}>
      <input
        ref={inputRef}
        type="text"
        onKeyPress={checkEnter}
        onBlur={createBullet}
      />
      <button
        onClick={createBullet}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default BulletCreator;