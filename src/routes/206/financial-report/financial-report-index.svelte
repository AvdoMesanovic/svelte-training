<script lang="ts">
	import Bar from '../_components/Bar.svelte';
	import { regionInfo, unitsScale, revenueScale } from '../_utils/app-data';

	const calculateScale = (val: number, scale: number) => {
		return val * scale;
	};
	const barColor = (rank: number) => {
		if (rank === 1) return 'green';
		else if (rank >= 7) return 'red';
		else return '#2f49cb';
	};
	const rankIcon = (rank: number) => {
		if (rank === 1) return '$';
		else if (rank >= 7) return 'X';
		else return '';
	};
	const regionClass = (name: string) => {
		return 'region-' + name;
	};
</script>

<div class="card">
	<div class="card-content">
		<div class="card-title">Financial Report</div>
		<table class="financial-report">
			<thead>
				<tr>
					<th class="employee-column">Name</th>
					<th class="units-column">Units Sold (millions)</th>
					<th class="revenue-column">Total</th>
				</tr>
			</thead>
			<tbody>
				{#each regionInfo as region}
					<tr>
						<th class="region-label">{region.regionName}</th>
					</tr>
					{#each region.employees as record, i}
						<tr class:stripe={i % 2 === 0}>
							<td class="{() => regionClass(region.regionName)} employee-name">
								{record.empName}
								<span>{rankIcon(record.rank)}</span>
							</td>
							<td class:stripe={i % 2 === 0}>
								<Bar val={calculateScale(record.units, unitsScale)} color={barColor(record.rank)} />
							</td>
							<td class:stripe={i % 2 === 0}>
								<Bar
									val={calculateScale(record.totalRevenue, revenueScale)}
									color={barColor(record.rank)}
								/>
							</td>
						</tr>
					{/each}
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style lang="scss">
	@import '../_utils/styles.scss';
</style>
