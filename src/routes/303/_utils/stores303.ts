export interface Employee {
	firstName: string;
	lastName: string;
}
async function getEmployees() {
	const employeeList = await fetch('https://api.angularbootcamp.com/employees');
	if (employeeList.ok) {
		const listEmployee = await employeeList.json();
		const arraySlice: Employee[] = listEmployee.slice(0, 5);
		return arraySlice;
	} else {
		throw new Error('HTTP-Error: ' + employeeList.status);
	}
}

export const promise = getEmployees();
