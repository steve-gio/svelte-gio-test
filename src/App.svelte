<script>
  import Nav from './components/Nav.svelte'
	import RegisterForm from './components/RegisterForm.svelte'
  import RecordedData from './components/RecordedData.svelte'
</script>

<Nav />
<div class="container">
  <RegisterForm />
  <RecordedData />
</div>

<style>
  .container {
    width: 100%;
    height: 85vh;
    display: flex;
    padding: 0px
  }
</style>
