<script lang="ts">
    export let data;
    import './mdstyles.css'
</script>

<main>
    <h1>{data.meta.title}</h1>

    <div class="content-container">
        <svelte:component this={data.content}></svelte:component>
    </div>
</main>

<style>
    h1 {
        text-align: center;
        padding: 2rem;
    }
    .content-container {
        max-width: 60ch;
        margin-inline: auto;
    }
    @media (max-width: 768px) {
        .content-container {
            max-width: 50ch;
        }
    }
</style>