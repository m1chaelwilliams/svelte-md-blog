<script lang="ts">
    import { links } from "$lib/config";
</script>

<nav>
    <a class="brand" href="/">Sphere.dev</a>
    <ul class="links">
        {#each links as link}
            <li><a class="link" href={link.link}>{link.title}</a></li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
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
        list-style: none;
        gap: 1rem;
    }
    .link:hover {
        color: var(--text-primary);
    }
</style>
