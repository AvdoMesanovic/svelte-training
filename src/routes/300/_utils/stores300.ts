import { writable, readable, derived } from 'svelte/store';
import data from './data.json';

export interface Employee {
	firstName: string;
	lastName: string;
}

export const employees = writable(data);

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
