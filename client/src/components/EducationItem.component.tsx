import { FaSolidSort } from "solid-icons/fa";
import { Education } from "../types";
import styles from "./EducationItem.module.scss";
import { TbEdit, TbTrash } from "solid-icons/tb";

interface IEducationItemProps {
  item: Education;
}
const EducationItem = (props: IEducationItemProps) => {
  return (
    <div class={styles.educationItem}>
      <div>
        <button>
          <FaSolidSort />
        </button>
        <input
          // onChange={toggleSkill}
          type="checkbox"
        // checked={selected()}
        />
        <div>
          <div class={styles.institution}>{props.item.institution}</div>
          <div class={styles.degree}>{props.item.degree}</div>
        </div>
      </div>
      <div>
        <button
        >
          <TbEdit />
        </button>
        <button
        >
          <TbTrash />
        </button>
      </div>
    </div>
  );
}

export default EducationItem;