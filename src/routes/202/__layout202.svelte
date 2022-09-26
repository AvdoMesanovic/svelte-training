<script lang="ts">
	import PageWrapper from '../_pageWrapper.svelte';
	import Tabs from '$lib/Tabs.svelte';

	let pages: { name: string; url: string }[] = [
		{ name: 'DashBoard', url: '/202/user-dashboard' },
		{ name: 'Employee Browser', url: '/202/employee-browser' }
	];
</script>

<PageWrapper step="Step 202 - Conditional and Looping">
	<Tabs {pages} />
	<slot />
</PageWrapper>
