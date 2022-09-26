<script lang="ts">
	export let title: string;
</script>

<div class="header">
	<img src="https://oasisdigital.com/images/od-logo-white.svg" alt="Oasis Digital Logo" />
	<span class="spacer" />
	<span>{title}</span>
</div>

<style lang="scss">
	.header {
		width: 100%;
		padding: 15px;
		background: #2196f3;
		height: 64px;
		color: white;
		display: flex;

		span {
			font-weight: bold;
			font-size: 24px;
		}

		.spacer {
			flex: 1 1 auto;
		}

		img {
			height: 100%;
		}
	}
</style>
