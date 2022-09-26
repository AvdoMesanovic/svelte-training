<script lang="ts">
	import PageWrapper from '../_pageWrapper.svelte';
	import Tabs from '$lib/Tabs.svelte';

	let pages: { name: string; url: string }[] = [
		{ name: 'Animations', url: '/206/financial-report' },
		{ name: 'Transitions', url: '/206/transitions' }
	];
</script>

<PageWrapper step="Step 206 - animations">
	<Tabs {pages} />
	<slot />
</PageWrapper>
