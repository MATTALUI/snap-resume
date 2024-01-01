import { FaSolidSort } from "solid-icons/fa";
import { IdentifiedString } from "../types"
import styles from "./SkillItem.module.scss";
import { TbEdit, TbTrash } from "solid-icons/tb";
import { JSX, createMemo } from "solid-js";
import { resumeSkills, setResumeSkills } from "../state/resume";
import { updatePersistedResume } from "../state";

type InputHandler = JSX.ChangeEventHandler<HTMLInputElement, Event>;

interface ISkillItemProps {
  item: IdentifiedString;
}
const SkillItem = (props: ISkillItemProps) => {
  const selected = createMemo(() => {
    return !!resumeSkills().find(s => s.id === props.item.id);
  });

  const toggleSkill: InputHandler = (event) => {
    let skills = [...resumeSkills()];
    skills = skills.filter(s => s.id !== props.item.id);
    if (event.target.checked) skills.push(props.item);
    setResumeSkills(skills);
    updatePersistedResume({ skills });
  }

  return (
    <div class={styles.skillItem}>
      <div>
        <button>
          <FaSolidSort />
        </button>
        <input
          onChange={toggleSkill}
          type="checkbox"
          checked={selected()}
        />
        <span class={styles.itemText}>
          {props.item.value}
        </span>
      </div>
      <div>
        <button>
          <TbEdit />
        </button>
        <button>
          <TbTrash />
        </button>
      </div>
    </div>
  );
}

export default SkillItem;