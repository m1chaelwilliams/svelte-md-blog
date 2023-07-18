<script lang="ts">
	import { formatDate } from '$lib/utils';
    export let data;
    import Icon from '@iconify/svelte';
</script>

<main>
    <header>
        <h1>Coding with Sphere 🌍</h1>
        <h3>Software Developer</h3>
        <div class="contact-area">
            <div>
                <a href="https://youtube.com/@codingwithsphere" target="_blank">YouTube</a>
                <Icon icon="tabler:brand-youtube" />
            </div>
            <div>
                <a href="https://github.com/m1chaelwilliams" target="_blank">Github</a>
                <Icon icon="tabler:brand-github" />
            </div>
        </div>
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
    .contact-area {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
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
    @media (max-width: 768px) {
        header {
            padding-inline: 2rem;
        }
    }
</style>