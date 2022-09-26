<script lang="ts">
	import Header from './_header.svelte';
	export let step: string;
</script>

<Header title={step} />
<div class="wrapper">
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss">
	.wrapper {
		margin: 15px;
	}
</style>
