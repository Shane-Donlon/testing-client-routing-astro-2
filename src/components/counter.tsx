import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./counter.module.css";
interface NavProps {
  transition?: boolean;
}
export const Counter = component$<NavProps>((transition) => {
  const count = useSignal(0);

  return (
    <>
      <div class={styles.container}
      >
        <button
          class={styles.counter}
          type="button"
          onClick$={() => count.value++}
          {...(transition && {
            "data-astro-transition-persist": "bar",
          })}
        >
          count is {count.value}
        </button>
      </div>
    </>
  );
});
