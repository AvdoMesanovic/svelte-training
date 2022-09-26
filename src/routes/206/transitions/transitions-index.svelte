<script lang="ts">
	import { fade, blur, fly, slide } from 'svelte/transition';

	let showTransitions: boolean[] = [false, true, true];
	let items = ['this ', 'is ', 'a ', 'local ', 'transition'];
	let count = 0;
	let toggleTransition = (x: number) => {
		showTransitions[x] = !showTransitions[x];
	};
	const addItems = () => {
		items = [...items, `Task ${items.length + 1}`];
	};
	let status = 'Fade In';
</script>

<div class="two-across">
	<div class="card">
		<div class="card-content">
			{#if showTransitions[0]}
				<div
					class="card"
					in:fade|local={{ duration: 1000 }}
					on:introend={() => (status = 'Blur Out')}
					out:blur|local={{ duration: 1000 }}
					on:outroend={() => (status = 'Fade In')}
				>
					<div class="card-content">
						<p>
							{status}
						</p>
					</div>
				</div>
			{/if}
			<button class="btn" on:click={() => toggleTransition(0)}>
				Transition {showTransitions[0] ? 'Out' : 'In'}
			</button>
		</div>
	</div>
	<div class="card">
		<div class="card-content">
			{#if showTransitions[1]}
				{#each items.slice(0, count) as item}
					<div class="card" transition:slide|local>
						<p>{item}</p>
					</div>
				{/each}
			{/if}
			<button class="btn" on:click={() => toggleTransition(1)}>
				Transition {showTransitions[1] ? 'Out' : 'In'}
			</button>
			<button
				class="btn"
				on:click={() => {
					count++;
					if (count >= 5) {
						addItems();
					}
				}}>+</button
			>
			<button
				class="btn"
				on:click={() => {
					count--;
				}}>-</button
			>
		</div>
	</div>
</div>
<div class="card">
	<div class="card-content">
		{#if showTransitions[2]}
			<div class="card" transition:fly|local={{ x: 600, y: -30, duration: 1200 }}>
				<div class="card-content">
					<p>fly</p>
				</div>
			</div>
		{/if}
		<button class="btn" on:click={() => toggleTransition(2)}>
			Transition {showTransitions[2] ? 'Out' : 'In'}
		</button>
	</div>
</div>
