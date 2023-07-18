<script lang="ts">
    import Icon from '@iconify/svelte';
</script>

<main>
    <h1>Contact ✉</h1>
    <p>
        Email: michaelwilliamscoding@gmail.com
    </p>
    <br>
    <h1>Where You can Find Me 👉💻</h1>
    <ul class="links">
        
        <div>
            <a href="https://youtube.com/@codingwithsphere" target="_blank">YouTube</a>
            <Icon icon="tabler:brand-youtube" />
        </div>
        <div>
            <a href="https://github.com/m1chaelwilliams" target="_blank">Github</a>
            <Icon icon="tabler:brand-github" />
        </div>
        
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
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    a {
        color: var(--text-secondary);
    }
    a:hover {
        color: var(--text-primary);
    }
</style>