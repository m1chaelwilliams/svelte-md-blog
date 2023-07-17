<script lang="ts">
    import Link from "../../posts/link.svelte";
</script>

<main>
    <h1>Contact ✉</h1>
    <p>
        You can contact me via <Link title="email" url="mailto:michaelwilliamscoding@gmail.com" icon="" />
    </p>
    <br>
    <h1>Where You can Find Me 👉💻</h1>
    <ul class="links">
        <Link title="YouTube" url="https://youtube.com/@codingwithsphere" icon="tabler:brand-youtube" />
        <Link title="Github" url="https://Github.com/m1chaelwilliams" icon="tabler:brand-github" />
    </ul>
</main>

<style>
    main {
        max-width: 60ch;
        margin-inline: auto;
        padding: 5rem;
        text-align: center;
    }
    .links {
        margin-top: 1rem;
    }
</style>