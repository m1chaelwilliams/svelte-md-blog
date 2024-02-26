<script lang="ts">
    export let title: string = 'link';
    export let url: string = '/';
    export let icon: string = "";
    import Icon from "@iconify/svelte";
</script>

<div>
    {#if icon}
    <Icon icon={icon} />
{/if}
<a href={url} target="_blank">{title}  </a>
</div>

<style>
    a {
        color: var(--text-primary);
    }
    a:hover {
        color: var(--text-secondary);
    }
    div {
        display: inline;
    }
</style>