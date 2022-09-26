import { writable } from 'svelte/store';
export function makeSupplyStore(supplies) {
	const { subscribe, update } = writable(supplies);

	function buy(index) {
		update((supplies) => {
			supplies[index].bought = true;
			return supplies;
		});
	}

	function reset() {
		update((supplies) => {
			return supplies.map((item) => ({ ...item, bought: false }));
		});
	}

	return { buy, reset, subscribe, update };
}

export const supplyStore = makeSupplyStore([
	{ name: 'Stapler', amount: 5, bought: false },
	{ name: 'Sticky Note', amount: 100, bought: false },
	{ name: 'Chair', amount: 10, bought: false },
	{ name: 'Table', amount: 2, bought: false }
]);
