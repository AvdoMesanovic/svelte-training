<script lang="ts">
	import type { Order } from '../_utils/api-types';
	import OrderHeader from './order-header.svelte';
	import OrderItems from './order-items.svelte';
	export let order: Order;
</script>

<div class="card">
	<div class="card-content">
		<div class="card-title">Details</div>
		{#if order}
			<OrderHeader orderHeader={order.customer} />
			<OrderItems items={order.items} />
		{:else}
			<h3>Please Select an Order</h3>
		{/if}
	</div>
</div>
