<script lang="ts">
    let count: number = 0

    const add = () => count += 1
</script>

<button on:click={add}>
    {count}
</button>