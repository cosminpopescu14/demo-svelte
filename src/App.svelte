<script xmlns="http://www.w3.org/1999/html">
	import Dog from './Dog.svelte'
	import Users from './Users.svelte'

	export let menu = 1;
</script>

<ul id="menu">
	<li><a href="Dog.svelte" on:click|preventDefault={() => (menu = 1)}>Dog</a></li> |
	<li><a href="Users.svelte" on:click|preventDefault={() => (menu = 2)}>Users</a></li>
</ul>

{#if menu === 1}
	<Dog />
{:else if menu === 2}
	<Users />
{:else}
	<h1>
		Page Not Found
	</h1>
{/if}
<main>
<!--	<div id = "users">-->
<!--		<Users/>-->
<!--	</div>-->
<!--	<div>-->
<!--		<h1>Random dogs</h1>-->
<!--		<Dog/>-->
<!--	</div>-->
<!--	<ul>-->
<!--		{#each users as user}-->
<!--			<li>{user.id} - {user.name}</li>-->

<!--		{/each}-->
<!--	</ul>-->

</main>

<style>
	ul#menu li{
		display : inline;
	}
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