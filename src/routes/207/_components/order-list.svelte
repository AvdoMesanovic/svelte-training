<script lang="ts">
	import type { Order } from '../_utils/api-types';
	export let orders: Order[] = [];
</script>

<div class="card">
	<div class="card-content">
		<div class="card-title">Choose an order using buttons above</div>
		{#each orders as order}
			<p>{order.id}: {order.customer}</p>
		{/each}
	</div>
</div>
