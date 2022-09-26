<script lang="ts">
	import { promise } from './_utils/stores';
</script>

<div class="card">
	<div class="card-content">
		<div class="card-title">Top 5 employees</div>
		{#await promise}
			<div>Loading...</div>
		{:then value}
			<ul>
				{#each value as employee}
					<li>
						{employee.firstName}
						{employee.lastName}
					</li>
				{/each}
			</ul>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</div>
