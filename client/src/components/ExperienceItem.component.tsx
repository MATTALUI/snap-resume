import styles from "./ExperienceItem.module.scss";
import { Experience } from "../types";
import { FaSolidSort } from "solid-icons/fa";
import { TbEdit, TbTrash } from "solid-icons/tb";
import ExperienceBullets from "./ExperienceBullets.component";

interface IExperienceItemProps {
  item: Experience;
}
const ExperienceItem = (props: IExperienceItemProps) => {
  return (
    <div class={styles.item}>
      <div class={styles.controls}>
        <button>
          <FaSolidSort />
        </button>
        <input
          // onChange={toggleSkill}
          type="checkbox"
        // checked={selected()}
        />
      </div>
      <div class={styles.center}>
        <div class={styles.company}>{props.item.company}</div>
        <div class={styles.smol}>{props.item.title}</div>
        <div class={styles.smol}>{props.item.dates}</div>
        <ExperienceBullets
          experienceId={props.item.id}
          bullets={props.item.bullets}
        />
      </div>
      <div class={styles.controls}>
        <button
        // onClick={toggleEditing}
        >
          <TbEdit />
        </button>
        <button
        // onClick={deleteSkill}
        >
          <TbTrash />
        </button>
      </div>
    </div>
  );
}

export default ExperienceItem;