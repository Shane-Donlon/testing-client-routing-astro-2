import { component$, Slot, useSignal } from '@builder.io/qwik';

interface PersistProps {
    persistKey: string;
}
export const Persist = component$((props: PersistProps) => {
    const persist = useSignal(props.persistKey)

    return (
        <div style={{ display: "contents" }}
            {...(persist.value && {
                "data-astro-transition-persist": persist.value
            })
            }>
            <Slot />
        </div>
    )
});