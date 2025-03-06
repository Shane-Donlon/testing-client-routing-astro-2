import { component$, useSignal } from "@builder.io/qwik";

export const Nav = component$(() => {
  const isOpen = useSignal(false);
  return (
    <>
      <button
        type="button"
        onClick$={() => {
          isOpen.value = !isOpen.value;
        }}
      >
        <p>{isOpen.value ? "open" : "close"}</p>
      </button>
      <nav class={isOpen.value ? "isActive" : ""}>
        <a href="/">Home</a>
        <a href="/test/">test nav</a>
        <a href="/about/">about nav</a>
      </nav>
    </>
  );
});
