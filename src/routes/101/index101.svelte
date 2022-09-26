<script lang="ts">
	let employee = 'John Doe';
	let daysWorked = 81;
	let company = 'Acme, Inc.';
	let employeeOfTheWeek = {
		name: 'Jane Smith'
	};
</script>

<p>Hello, {employee}.</p>
<p>Days worked: {daysWorked}</p>
<p>Days until next vacation: {365 - daysWorked}</p>
<p>Thank you for being a dedicated employee of {company + '!'}</p>
<img src="avatar.png" alt="employeeOfTheWeek Headshot" />
<p>Employee of the week is {employeeOfTheWeek.name + '!'}</p>
