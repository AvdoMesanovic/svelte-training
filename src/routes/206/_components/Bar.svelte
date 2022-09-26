<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { backIn } from 'svelte/easing';
	export let val = 0;
	export let color: string;

	const animate = tweened(0 /*starting value*/, {
		duration: 1500 /*duratiion*/,
		easing: backIn /*easing equation*/
	});
	// tweened(starting value, {duration, delay, easing, interpolate});
	tweened(0);
	$: animate.set(val);
</script>

<div
	style="background-color: {color};
                    width: {$animate}%;"
	class="bar"
/>

<style lang="scss">
	.bar {
		height: 10px;
		border-radius: 2px;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
	}
</style>
