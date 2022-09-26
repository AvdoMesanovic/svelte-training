<script lang="ts">
	let name = 'John Doe';
	let message = 'Please clock in';
	let currentSchedule = 'Hover to see the selected work times';
	const scheduleMap = {
		M: '9:00 - 5:00',
		T: '9:00 - 4:30',
		W: '9:00 - 3:00',
		R: '9:00 - 3:30',
		F: '9:00 - 5:00'
	};
	const clockIn = (event: MouseEvent) => {
		if (event.shiftKey) {
			message = 'Clocked in as manager!';
		} else {
			message = 'Clocked in as employee';
		}
	};
	const clockOut = () => {
		message = 'Have a nice day!';
	};
	const showSchedule = (day: string) => {
		currentSchedule = scheduleMap[day];
	};
	const clearSchedule = () => {
		currentSchedule = 'Hover to see the selected work times';
	};
</script>

<div class="two-across">
	<section class="card">
		<div class="card-content">
			<span class="card-title">Time Clock</span>
			<p>Hello, {name}.</p>
			<p>
				<strong>{message}</strong>
			</p>
			<div class="card-action">
				<button class="btn" on:click={clockIn}>Clock In</button>
				<button class="btn" on:click={clockOut}>Clock Out</button>
			</div>
		</div>
	</section>

	<section class="card">
		<div class="card-content">
			<span class="card-title">Upcoming Schedule</span>
			<div class="time-block" on:mouseleave={clearSchedule}>
				<div class="day-0" on:mouseenter={() => showSchedule('M')}>M</div>
				<div class="day-1" on:mouseenter={() => showSchedule('T')}>T</div>
				<div class="day-2" on:mouseenter={() => showSchedule('W')}>W</div>
				<div class="day-3" on:mouseenter={() => showSchedule('R')}>R</div>
				<div class="day-4" on:mouseenter={() => showSchedule('F')}>F</div>
			</div>
			<div>{currentSchedule}</div>
		</div>
	</section>
</div>

<style lang="scss">
	@import './_utils/styles.scss';
</style>
