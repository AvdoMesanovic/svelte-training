<script lang="ts">
	export let supplyStore;
</script>

{#each $supplyStore as { name, amount, bought }, index}
	<div>
		{name}
		x{amount}
		{#if bought}
			<b>Sold!</b>
		{:else}
			<button on:click={() => supplyStore.buy(index)}>Buy</button>
		{/if}
	</div>
{/each}

<style>
	div {
		padding-top: 10px;
	}
</style>
