<script lang="ts">
    import Link from "../../posts/link.svelte";
</script>

<main>
    <header>
        <h1>Coding with Sphere</h1>
        <p>Where you can find me</p>
    </header>
    <nav>
        <Link title="Github" url="https://github.com/m1chaelwilliams" icon="tabler:brand-github" />
        <Link title="Linked In" url="www.linkedin.com/in/michael-williams-131773221" icon="tabler:brand-linkedin"/>
        <Link title="YouTube" url="https://youtube.com/@codingwithsphere" icon="tabler:brand-youtube" />
        <Link title="Discord" url="https://discord.gg/3FxVWRDdXD" icon="tabler:brand-discord" />
        <Link title="Patreon" url="https://patreon.com/codingwithsphere" icon="tabler:brand-patreon" />
    </nav>
</main>

<style>
    header {
        text-align: center;
    }
    nav {
        max-width: fit-content;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
    }
    main {
        margin-top: 2rem;
    }
</style>