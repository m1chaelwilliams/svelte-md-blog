<script lang="ts">
	import Link from "../../posts/link.svelte";

    export let data;
</script>

<main>
    <h1>{data.meta.title}</h1>

    <div class="content-container">
        <svelte:component this={data.content}></svelte:component>
    </div>
    <div class="links">
        <div class="column">
            <div>
                <Link title="YouTube" url="https://youtube.com/@codingwithsphere" icon="tabler:brand-youtube" />
            <Link title="Github" url="https://github.com/m1chaelwilliams" icon="tabler:brand-github" />
            </div>
        </div>
        <div class="column">
            <p>Support Me:</p>
            <div>
                <Link title="Patreon" url="https://patreon.com/codingwithsphere" icon="tabler:brand-patreon" />
            </div>
        </div>

    </div>
</main>

<style>
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        padding: 1rem;
        border-top: 1px solid var(--background-secondary);
    }
    .links p {
        margin-inline: 1rem;
        margin-bottom: 0;
    }
    .column {
        display: flex;
        align-items: center;
    }
    h1 {
        text-align: center;
        margin-top: 2rem;
    }
    .content-container {
        max-width: 60ch;
        margin-inline: auto;
        padding: 1rem;
        min-height: 100vh;
        min-height: 100dvh;
    }
    @media (max-width: 768px) {
        .content-container {
            max-width: clamp(40ch, 100%, 60ch);
        }
        .links {
            gap: 0;
            flex-direction: column;
        }
        .links p {
            display: none;
        }
    }
</style>