<script lang="ts">
	import type { Item } from '../_utils/api-types';
	export let items: Item[];
</script>

<div class="card">
	<div class="card-content">
		{#each items as item}
			<p>{item.quantity}: {item.description}</p>
		{/each}
	</div>
</div>
