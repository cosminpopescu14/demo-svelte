<script>
	import Dog from './Dog.svelte'
	import Users from './Users.svelte'

	let users = [
		{id:1,name: "king"},
		{id:2, name: "gowtham"},
		{id:3, name: "sai"}
	]
</script>

<main>
	<div id = "users">
		<Users/>
	</div>
	<div>
		<h1>Random dogs</h1>
		<Dog/>
	</div>
	<ul>
		{#each users as user}
			<li>{user.id} - {user.name}</li>

		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>