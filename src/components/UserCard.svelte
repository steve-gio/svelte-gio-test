<script>
  import { fade } from 'svelte/transition';

  export let name
  export let email
  export let imageLink
</script>

<div class="center">
  <div in:fade class="card">
      <div class="image" style="background-image: url({imageLink})">
        <div class="image-title">
        </div>
      </div>
    <div class="description">
      <h5> {name} </h5>
      <p>{email}</p>
    </div>
  </div>
</div>

<style>
  
  h5{
    margin:0px;
    font-size:1.8em;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p{
    font-size:18px;
    font-weight: 500;
    margin-block-start: 0.5em;
  }

  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card{
    height:14em;
    width:15em;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;
    position:relative;
    -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius:16px;
    overflow:hidden;
    -webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
    box-shadow:  5px 5px 7px #e1e1e3, -5px 5px 7px #ffffff;
  }

  .image{
    height:8em;
    width:15em;
    padding:1em 2em;
    position:Absolute;
    top:0px;
    -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-size:cover;
    background-repeat:no-repeat;
  }
  .description{
    background-color: #FAFAFC;
    height:6em;
    width:15em;
    position:absolute;
    bottom:0em;
    -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding-top: 0.5rem;
    text-align:center;
  }

  /* Cards Hover States */

  .card:hover .description{
    height:0em;
    padding:0px 1em;
  }
  .card:hover .image{
    height:16em;
  }

  .card:hover{
    background-color:white;
  }

  .card:hover{
    background-color:blue;
    cursor:pointer;
  }
</style>