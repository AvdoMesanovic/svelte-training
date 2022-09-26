<script lang="ts">
	import { employees, time, elapsed } from './_utils/stores';
	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<section class="card">
	<div class="card-content">
		<div class="card-title">Employees</div>
		<ul class="collection">
			{#each $employees as e}
				<li class="collection-item">
					{e.firstName}
					{e.lastName}
				</li>
			{/each}
		</ul>
	</div>
	<h1>The time is {formatter.format($time)}</h1>
	<p>
		This page has been open for
		{$elapsed}
		{$elapsed === 1 ? 'second' : 'seconds'}
	</p>
</section>
