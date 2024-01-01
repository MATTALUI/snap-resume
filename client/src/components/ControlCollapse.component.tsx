import { JSX, createMemo, createSignal, onMount } from "solid-js";
import styles from "./ControlCollapse.module.scss";


interface IControlCollapseProps {
  title: string;
  defaultOpen?: boolean;
  children: JSX.Element;
}
const ControlCollapse = (props: IControlCollapseProps) => {
  const { defaultOpen = false } = props;
  const [expanded, setExpanded] = createSignal(false);
  const toggleExpanded = () => setExpanded(!expanded());
  let headerRef: HTMLDivElement | undefined;
  let contentRef: HTMLDivElement | undefined;

  const height = createMemo(() => {
    if (!expanded() || !headerRef || !contentRef) return `40px`;
    const { height: headerHeight } = headerRef.getBoundingClientRect();
    const { height: contentHeight } = contentRef.getBoundingClientRect();
    const height = headerHeight + contentHeight;

    return `${height}px`;
  });

  onMount(() => {
    setExpanded(defaultOpen);
  });


  return (
    <div
      style={{
        height: height(),
      }}
      class={styles.collapse}
    >
      <div
        ref={headerRef}
        class={styles.collapseHeader}
        onClick={toggleExpanded}
      >
        <h2>{props.title}</h2>
      </div>
      <div
        ref={contentRef}
        class={styles.collapseContent}
      >
        {props.children}
      </div>
    </div>
  );
}

export default ControlCollapse;