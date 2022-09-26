<script lang="ts">
	import Supplies from './_components/Supplies.svelte';
	import { supplyStore } from './_utils/supplyStore';
</script>

<div>
	<h1>Office Supplies Store</h1>
	<p><Supplies {supplyStore} /></p>
	<button on:click={supplyStore.reset}>Reset</button>
</div>

<style>
</style>
