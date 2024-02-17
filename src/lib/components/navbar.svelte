<script lang="ts">

</script>

<main>
    <nav>
        <a class="brand" href="/">Sphere.dev</a>
        <ul class="links">
            <a class="link" href="/">Home</a>
            <a class="link" href="/projects">Projects</a>
            <a class="link" href="/links">Links</a>
            <a class="link" href="/contact">Contact</a>
        </ul>
    </nav>
</main>

<style>
    main {
        border-bottom: 1px solid var(--background-secondary);
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        max-width: 80ch;
        margin-inline: auto;
    }
    nav * {
        color: var(--text-secondary);
    }
    .brand {
        text-decoration: none;
        color: var(--text-primary);
    }
    .links {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 1rem;
        margin: 0;
        padding-inline: 0;
    }
    .link:hover {
        color: var(--text-primary);
    }
</style>
