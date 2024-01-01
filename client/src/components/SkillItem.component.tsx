import { FaSolidSort } from "solid-icons/fa";
import { IdentifiedString } from "../types"
import styles from "./SkillItem.module.scss";
import { TbEdit, TbTrash } from "solid-icons/tb";
import { JSX, Show, createMemo, createSignal } from "solid-js";
import { resumeSkills, setResumeSkills } from "../state/resume";
import { updatePersistedAllSkills, updatePersistedResume } from "../state";
import { allSkills, setAllSkills } from "../state/app";

type InputHandler = JSX.ChangeEventHandler<HTMLInputElement, Event>;

interface ISkillItemProps {
  item: IdentifiedString;
}
const SkillItem = (props: ISkillItemProps) => {
  let inputRef: HTMLInputElement | undefined;
  const [editing, setEditing] = createSignal(false);

  const selected = createMemo(() => {
    return !!resumeSkills().find(s => s.id === props.item.id);
  });

  const toggleEditing = () => {
    if (inputRef && inputRef.value !== props.item.value) {
      const value = inputRef.value;
      const newResumeSkills = resumeSkills().map(s => s.id === props.item.id
        ? { id: props.item.id, value }
        : s
      );
      const newAllSkills = allSkills().map(s => s.id === props.item.id
        ? { id: props.item.id, value }
        : s
      );
      setResumeSkills(newResumeSkills);
      setAllSkills(newAllSkills);
      updatePersistedResume({ skills: newResumeSkills });
      updatePersistedAllSkills(newAllSkills);
    }
    setEditing(!editing());
    if (inputRef) inputRef.focus();
  }

  const toggleSkill: InputHandler = (event) => {
    let skills = [...resumeSkills()];
    skills = skills.filter(s => s.id !== props.item.id);
    if (event.target.checked) skills.push(props.item);
    setResumeSkills(skills);
    updatePersistedResume({ skills });
  }

  const deleteSkill = () => {
    let newResumeSkills = [...resumeSkills()];
    let newAllSkills = [...allSkills()];
    newResumeSkills = newResumeSkills.filter(s => s.id !== props.item.id);
    newAllSkills = newAllSkills.filter(s => s.id !== props.item.id);
    setResumeSkills(newResumeSkills);
    setAllSkills(newAllSkills);
    updatePersistedResume({ skills: newResumeSkills });
    updatePersistedAllSkills(newAllSkills);
  }

  const checkEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") toggleEditing();
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
        <Show when={!editing()}>
          <span
            onDblClick={toggleEditing}
            class={styles.itemText}
          >
            {props.item.value}
          </span>
        </Show>
        <Show when={editing()}>
          <input
            type="text"
            ref={inputRef}
            value={props.item.value}
            onBlur={toggleEditing}
            onKeyPress={checkEnter}
          />
        </Show>
      </div>
      <div>
        <button onClick={toggleEditing}>
          <TbEdit />
        </button>
        <button
          onClick={deleteSkill}
        >
          <TbTrash />
        </button>
      </div>
    </div>
  );
}

export default SkillItem;