<script>
  import { registerUser } from '../services/firebaseService'
  import { fade } from 'svelte/transition';
  
  let user = {
    name: '',
    email: '',
    imageLink: ''
  }
  let errors = {
    name: '',
    email: '',
    imageLink: '',
  }
  let valid = false


  const submitForm = () => {
    valid = true

    // Validate name
    if(user.name.trim().length < 5) {
      valid = false
      errors.name = 'Name must be at least 5 characters long'
    } else {
      errors.name = ''
    }

    // Validate email
    if(user.email.trim().length < 1) {
      valid = false
      errors.email = 'Email cannot be empty'
    } else {
      errors.email = ''
    }

    // Validate imageLink
    if(user.imageLink.trim().length < 1) {
      valid = false
      errors.imageLink = 'Image link cannot be empty'
    } else {
      errors.imageLink = ''
    }

    if(valid){
      registerUser(user)
      console.log(user)
      user = { name: '', email: '', imageLink: '' }
    }

  }

</script>




<form class="form-container" on:submit|preventDefault={submitForm} >  
  <p class="form-title">ENTER THE DATA <br> TO THE REGISTER</p>
  
  {#if errors.name}
  <div in:fade class="error">{ errors.name }</div>
  {/if}

  <input bind:value={user.name} type="text" class="form-input" placeholder="User name" />

  {#if errors.email}
  <div in:fade class="error">{ errors.email }</div>
  {/if}

  <input bind:value={user.email} type="email" class="form-input" placeholder="Email" />

  {#if errors.imageLink}
  <div in:fade class="error">{ errors.imageLink }</div>
  {/if}

  <input bind:value={user.imageLink} class="form-input" placeholder="Image Link" />

  <button type='submit'>SEND</button>
</form>
<div class="triangle"></div>



<style>

  .form-container {
    width: 50%;
    height: 100%;
    background-color: black;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .form-title {
    color: white;
    margin: 0;
    font-size: 45px;
    text-align: center;
    margin-bottom: 3.5rem;
    letter-spacing: 7px;
    line-height: 110%;
  }

  .form-input {
    background-color: black;
    border-color: white;
    border-radius: 3px;
    width: 70%;
    padding: 15px;
    color: white;
    margin-bottom: 2rem;
  }

  .triangle {
    width: 0;
    height: 0;
    top: 60%;
    left: 48%;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-right: 60px solid white;
    position: absolute;
  }

  button{
    color: black;
    background-color: white;
    padding: 10px 50px;
    border-radius: 4px;
    justify-content: center;
    font-weight: 800;
    font-size: larger;
  }

  button:hover{
    background-color: #e6e6e6;
  }

  .error{
    color: white;
    font-weight: bolder;
    font-size: smaller;
  }

</style>