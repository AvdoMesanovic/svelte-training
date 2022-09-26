<script lang="ts">
	interface navigation {
		name: string;
		url: string;
	}
	export let pages: navigation[];
	let activePage = pages[0].url;

	const changePage = (currPage: string) => {
		if (activePage != currPage) {
			activePage = currPage;
		}
	};
</script>

<header style="margin-top: 5px;">
	<nav>
		<div class="nav-wrapper">
			<ul style="padding-left:0;">
				{#each pages as tab, i}
					<li>
						<a
							href={tab.url}
							class:nav-btn-active={tab.url === activePage}
							class="nav-btn"
							on:click={() => changePage(tab.url)}
						>
							{tab.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</header>
