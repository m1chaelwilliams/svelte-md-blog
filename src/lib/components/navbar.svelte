<script lang="ts">

</script>

<nav>
    <a class="brand" href="/">Sphere.dev</a>
    <ul class="links">
        <li><a class="link" href="/">Home</a></li>

        <li><a class="link" href="/about-me">About</a></li>
        <li><a class="link" href="/contact">Contact</a></li>
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
