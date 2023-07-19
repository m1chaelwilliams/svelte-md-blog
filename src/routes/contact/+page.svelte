<script lang="ts">
    import Link from "../../posts/link.svelte";
</script>

<main>
    <h1>Contact</h1>
    <p>You can contact me via <Link title="Email" url="mailto:michaelwilliamscoding@gmail.com" icon="" /> </p>
    <h1>Socials</h1>
    <div class="links">
        <Link title="YouTube" url="https://youtube.com/@codingwithsphere" icon="tabler:brand-youtube" />
        <Link title="Github" url="https://github.com/m1chaelwilliams" icon="tabler:brand-github" />
    </div>
</main>

<style>
    main {
        padding: 5rem;
        text-align: center;
    }
    .links {
        display: flex;
        justify-content: center;
        gap: 1rem;
    } 
</style>