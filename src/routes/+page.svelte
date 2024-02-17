<script lang="ts">
    export let data;
    import Icon from '@iconify/svelte';

    let pinned_posts = data.posts.filter(obj => obj.pinned === true);
    let posts = data.posts.filter(obj => obj.pinned === false);
</script>

<main>
    <header>
        <h1>Coding with Sphere 🌍</h1>
        <h3>Software Developer</h3>
        <div class="contact-area">
            <div>
                <a href="https://github.com/m1chaelwilliams" target="_blank">Github</a>
                <Icon icon="tabler:brand-github" />
            </div>
            <div>
                <a href="https://youtube.com/@codingwithsphere" target="_blank">YouTube</a>
                <Icon icon="tabler:brand-youtube" />
            </div>
        </div>
    </header>

    <ul class="links">
        <p>--- Pinned ---</p>
        {#each pinned_posts as post}
            <li>
                <a href={post.slug}>{post.title}</a>
            </li>
        {/each}
        <p>--- Posts ---</p>
        {#each posts as post}
            <li>
                <a href={post.slug}>{post.title}</a>
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
        padding-bottom: 3rem;
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
    p {
        text-align: center;
        margin-bottom: 0;
    }
</style>