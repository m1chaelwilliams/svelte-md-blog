<script lang="ts">
    export let title: string = 'link';
    export let url: string = '/';
    export let icon: string;
    import 'iconify-icon';
</script>

{#if icon}
    <iconify-icon class="icon" icon={icon}></iconify-icon>
{/if}
<a href={url} target="_blank">{title}  </a>

<style>
    a {
        color: var(--text-secondary);
    }
    a:hover {
        color: var(--text-primary);
    }
</style>