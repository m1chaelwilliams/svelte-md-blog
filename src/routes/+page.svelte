<script lang="ts">
	import { formatDate } from '$lib/utils';
    export let data;
</script>

<main>
    <header>
        <h1>Coding with Sphere 🌍</h1>
        <h3>Software Developer</h3>
    </header>

    <ul class="links">
        {#each data.posts as post}
            <li>
                <a href={post.slug}>{post.title}</a>
                <p>{formatDate(post.date)}</p>
            </li>
        {/each}
    </ul>
</main>

<style>
    header {
        text-align: center;
        padding: 5rem;
    }
    h3 {
        color: var(--text-secondary);
    }
    .links {
        max-width: fit-content;
        margin-inline: auto;
        list-style: none;
    }
    a {
        color: var(--text-secondary);
    }
    a:hover {
        color: var(--text-primary);
    }
</style>