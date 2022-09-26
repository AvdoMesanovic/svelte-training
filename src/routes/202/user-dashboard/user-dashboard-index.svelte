<script lang="ts">
	import { meetingList, todo } from '../_utils/app-data';

	let todos: string[] = todo;
	let showProfile = true;
	const addTodo = () => {
		todos = [...todos, `Task ${todos.length + 1}`];
	};
</script>

<div class="two-across">
	<section class="card profile">
		<div class="card-content">
			<div class="card-title">Profile</div>
			{#if showProfile}
				<div class="pad-around">
					<ul>
						<li>Phone number: 555-123-1345</li>
						<li>Email address: test@abccompany.com</li>
						<li>Address: 1 Main Street, St. Louis, MO 63105</li>
					</ul>
				</div>
			{/if}
		</div>
		<div class="card-action">
			<button
				class="btn"
				on:click={() => {
					showProfile = !showProfile;
				}}
			>
				{showProfile ? 'Hide' : 'Show'} Profile
			</button>
		</div>
	</section>

	<section class="card todo">
		<div class="card-content">
			<div class="card-title">Todo List</div>
			<ul class="collection" style="height: 140px; overflow-y: auto;">
				{#each todos as task}
					<li class="collection-item">
						{task}
					</li>
				{/each}
			</ul>
			<button class="btn-floating btn-large red" style="float: right;" on:click={addTodo}>
				<span class="material-icons">+</span>
			</button>
		</div>
	</section>

	<section class="card meetings">
		<div class="card-content">
			<div class="card-title">Upcoming Meetings</div>
			<ul class="collection">
				{#each meetingList as meeting, i}
					<li class="collection-item">
						{i + 1}: {meeting.description}
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="card participants">
		<div class="card-content">
			<div class="card-title">Who is in meetings</div>
			<ul class="collection">
				{#each meetingList as meeting}
					<li class="collection-item">
						{meeting.description}: {meeting.participants}
					</li>
				{/each}
			</ul>
		</div>
	</section>
</div>
