<script lang="ts">
	import { mockApiOrders } from './_utils/api-types';
	import type { Order } from './_utils/api-types';
	import OrderDetails from './_components/order-details.svelte';
	import OrderList from './_components/order-list.svelte';

	let orderList = mockApiOrders;
	let selectedOrder: Order;
	const chooseOrder = (orderNum: number) => {
		selectedOrder = orderList[orderNum];
	};
</script>

<div class="card">
	<div class="card-content">
		<div class="card-title">Order Management Application</div>

		<div>
			<button
				class="btn"
				on:click={() => {
					chooseOrder(0);
				}}>Choose First Order</button
			>
			<button
				class="btn"
				on:click={() => {
					chooseOrder(1);
				}}>Choose Second Order</button
			>
		</div>

		<div class="two-across">
			<OrderList orders={orderList} />
			<OrderDetails order={selectedOrder} />
		</div>
	</div>
</div>
