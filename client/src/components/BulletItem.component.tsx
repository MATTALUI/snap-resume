import { TbEdit, TbTrash } from "solid-icons/tb";
import { IdentifiedString } from "../types";
import styles from "./BulletItem.module.scss";
import { FaSolidSort } from "solid-icons/fa";
import { createMemo } from "solid-js";
import { resumeExperiences } from "../state/resume";

interface IBulletItemProps {
  item: IdentifiedString;
}
const BulletItem = (props: IBulletItemProps) => {
  const selected = createMemo(() => {
    return !!resumeExperiences().find((experience) => {
      return !!experience.bullets.find(b => b.id === props.item.id);
    });
  });

  return (
    <div class={styles.bulletItem}>
      <div>
        <button>
          <FaSolidSort />
        </button>
        <input
          // onChange={toggleSkill}
          type="checkbox"
          checked={selected()}
        />
        <span>{props.item.value}</span>
      </div>
      <div>
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

export default BulletItem;