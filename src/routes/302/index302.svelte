<script lang="ts">
	import { promise } from './_utils/stores';
	import type { Employee } from './_utils/stores';
	let data: Employee[];
	async function resovlePromise() {
		data = await promise;
	}
	resovlePromise();
</script>

<div class="card">
	<div class="card-content">
		<div class="card-title">Top 5 employees</div>
		<ul>
			{#if data != undefined}
				{#each data as employee}
					<li>
						{employee.firstName}
						{employee.lastName}
					</li>
				{/each}
			{:else}
				Loading...
			{/if}
		</ul>
	</div>
</div>
