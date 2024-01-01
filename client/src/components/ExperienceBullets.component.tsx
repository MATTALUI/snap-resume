import { For } from "solid-js";
import { IdentifiedString } from "../types";
import BulletCreator from "./BulletCreator.component";
import styles from "./ExperienceBullets.module.scss";
import BulletItem from "./BulletItem.component";

interface IExperienceBulletsProps {
  experienceId: string;
  bullets: IdentifiedString[],
}
const ExperienceBullets = (props: IExperienceBulletsProps) => {
  return (
    <div class={styles.bullets}>
      <BulletCreator experienceId={props.experienceId} />
      <For each={props.bullets}>
        {(item) => <BulletItem item={item} />}
      </For>
    </div>
  );
}

export default ExperienceBullets;