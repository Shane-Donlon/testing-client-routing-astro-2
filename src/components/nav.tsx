import { component$, useSignal } from "@builder.io/qwik";

// Define the props interface
interface NavProps {
    transition?: boolean;
}

export const Nav = component$<NavProps>(() => {
    const isOpen = useSignal(false);
    return (
        <>
            <button
                type="button"
                onClick$={() => {
                    isOpen.value = !isOpen.value;
                }}
            >
                {isOpen.value ? "open" : "close"}
            </button>
            <nav class={isOpen.value ? "isActive" : ""}
            >
                <a href="/">Home</a>
                <a href="/test/">test nav</a>
                <a href="/about/">about nav</a>
            </nav>
        </>
    );
});