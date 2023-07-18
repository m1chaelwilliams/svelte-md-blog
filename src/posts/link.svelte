<script lang="ts">
    export let title: string = 'link';
    export let url: string = '/';
    export let icon: string = "";
    import Icon from "@iconify/svelte";
</script>

{#if icon}
    <Icon icon={icon} />
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