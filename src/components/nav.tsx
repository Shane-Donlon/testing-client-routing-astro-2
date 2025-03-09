import { component$, useSignal } from "@builder.io/qwik";

// Define the props interface
interface NavProps {
    transition?: boolean;
}

export const Nav = component$<NavProps>(({ transition }) => {
    const isOpen = useSignal(false);
    return (
        <>
            <div {...(transition && {
                "data-astro-transition-persist": "foo",
            })}>
                <button
                    type="button"
                    onClick$={() => {
                        isOpen.value = !isOpen.value;
                    }}

                >
                    <p>{isOpen.value ? "open" : "close"}</p>
                </button>
                <nav class={isOpen.value ? "isActive" : ""}
                >
                    <a href="/">Home</a>
                    <a href="/test/">test nav</a>
                    <a href="/about/">about nav</a>
                </nav>
            </div >
        </>
    );
});