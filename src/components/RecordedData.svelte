<script>

  import { db } from "../config/firebaseConfig";
  import UserCard from "./UserCard.svelte"

  let users = []

  /**
 * @description gets all the users registered in the database and assigns the to the users variable
 */
  db.collection("users").orderBy("createdAt", "desc").limit(10).onSnapshot((querySnapshot) => {
    let docs = []
    querySnapshot.forEach((doc) => {
      docs.push(doc.data())
    })
    users = [...docs]
  })


</script>

<div class="list-container">
  <p class="list-title">UPDATE <br> RECORDED DATA</p>
  <div class='grid-container' >
    {#each users as user}
        <UserCard name={user.name} email={user.email} imageLink={user.imageLink} />
    {:else}
      <div></div>
      <div class='loader'></div>
    {/each}
  </div>
  <div class="button-container">
    <button>
      UPDATE
    </button>
  </div>
</div>

<style>

  .list-container {
    width: 50%;
    height: 100%;
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .list-title {
    margin: 0;
    font-size: 50px;
    text-align: center;
    margin-bottom: 3.5rem;
    letter-spacing: 7px;
    line-height: 100%;
    font-weight: 500;
  }

  .grid-container {
    height: 240px;
    width: 110%;
    overflow-y: auto;
    scrollbar-width: none;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
    row-gap: 50px;
  }

  .grid-container::-webkit-scrollbar{
    display: none;
  }

  .button-container{
    width: 121%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    color: white;
    background-color: black;
    padding: 10px 38px;
    margin-top: 20px;
    border-radius: 4px;
    justify-content: center;
    font-weight: 800;
    font-size: larger;
  }

  button:hover{
    color: white;
    background-color: #444;
  }

  .loader {
    width:50px;
    height:50px;
    border-radius:50%;
    border:8px solid;
    border-color:#000 #0000;
    animation:s1 1s infinite;
  }
  @keyframes s1 {to{transform: rotate(.5turn)}}


</style>