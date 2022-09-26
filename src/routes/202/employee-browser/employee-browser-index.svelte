<script lang="ts">
	import { employeeList } from '../_utils/app-data';
	let showInactiveRoles = false;
</script>

<div class="two-across">
	<section class="card">
		<div class="card-content">
			<div class="card-title">Employees</div>

			<button
				class="btn"
				on:click={() => {
					showInactiveRoles = !showInactiveRoles;
				}}
			>
				{showInactiveRoles ? 'Hide' : 'Show'} Inactive Roles
			</button>

			<ul class="collection">
				{#each employeeList as employee}
					<li class="collection-item">
						<strong>{employee.name}</strong>
						<div>
							{#if showInactiveRoles}
								{#each employee.roles as role}
									<div>
										{role}
									</div>
								{/each}
							{:else}
								{employee.roles[0]}
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</div>
