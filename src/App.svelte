<script>
	import RegisterForm from "./components/RegisterForm.svelte";
	import UserList from "./components/UserList.svelte";
</script>

<div class="skeleton">
	<div id="logo">

		<img
			src="images/GET-it-OUT.svg"
			alt="Company logo"
		/>
	</div>

	<!-- Main container with RegisterForm (left side) and UserList (right side) -->
	<div id="main">
		<RegisterForm />
		<UserList />
	</div>
</div>

<style>
	img {
		height: 100%;
	}

	.skeleton {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 0.1fr 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		width: 100%;
		height: 100%;
		font-family: "Roboto Mono", monospace;
	}

	#logo {
		padding-top: 3vh;
		padding-bottom: 3vh;
		grid-area: 1 / 1 / 2 / 3;
		width: 100%;
		text-align: center;
		box-shadow: 9px -2px 20px 0px #111;
		z-index: 99;
	}
	#main {
		display: grid;
		grid-area: 2 / 1 / 3 / 3;
		grid-template-columns: 1fr 1fr;
		overflow: hidden;
	}
	/* Small white arrow in the middle of the page */
	#main:after {
		content: " ";
		position: absolute;
		margin: auto;
		border-top: 30px solid transparent;
		border-right: 55px solid white;
		border-left: none;
		border-bottom: 30px solid transparent;
		width: 0px;
		height: 0px;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin-right: 49%;
		margin-top: 50vh;
	}
</style>
