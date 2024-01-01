import { AiOutlinePlus } from "solid-icons/ai";
import styles from "./SkillCreator.module.scss";
import { IdentifiedString } from "../types";
import { allSkills, setAllSkills } from "../state/app";
import { updatePersistedAllSkills } from "../state";

const SkillCreator = () => {
  let inputRef: HTMLInputElement | undefined;

  const addSkill = () => {
    if (!inputRef || !inputRef.value) return;
    const { value } = inputRef;
    const newSkill: IdentifiedString = {
      value,
      id: crypto.randomUUID(),
    };
    const newSkills = [newSkill, ...allSkills()];
    setAllSkills(newSkills);
    updatePersistedAllSkills(newSkills);
    inputRef.value = "";
  }

  const checkEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") addSkill();
  }

  return (
    <div class={styles.container}>
      <input
        ref={inputRef}
        onKeyPress={checkEnter}
        type="text"
      />
      <button
        onClick={addSkill}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default SkillCreator;