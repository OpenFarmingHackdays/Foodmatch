<script>
    export let cmps;
</script>

{#each cmps as cmp}
    <svelte:component this={cmp} />
{/each}
