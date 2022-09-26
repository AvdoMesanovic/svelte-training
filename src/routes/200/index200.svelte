<p>
	This step is Creating Your New Project; there is no code to explore here. This step will talk
	about SvelteKit and how to install it. SvelteKit is a framework for building extremely
	high-performance web apps. You're looking at one right now! There are two basic concepts:
</p>
<ul>
	<li>- Each page of your app is a Svelte component</li>
	<li>
		- You create pages by adding files to the src/routes directory of your project. These will be
		server-rendered so that a user's first visit to your app is as fast as possible, then a
		client-side app takes over
	</li>
</ul>
<p>To buid a SvelteKit app, you will want to run <b>npm init</b></p>
<ul>
	<li>npm init svelte@next my-app</li>
	<li>cd my-app</li>
	<li>npm install</li>
	<li>npm run dev</li>
</ul>
<p>
	This will scaffold a new project in the my-app directory, install its dependencies, and start a
	server on localhost:3000.
</p>

<style>
	ul {
		list-style-type: none;
	}
</style>
