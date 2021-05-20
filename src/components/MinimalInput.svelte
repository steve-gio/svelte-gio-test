<script>
    export let placeholder = "";
    export let value;
</script>

<input {placeholder} bind:value required/>

<style>
    input {
        background-color: black;
        color: white;
        font-size: 15px;
        height: 60px;
        padding: 12px 20px;
        width: 410px;
    }
    input::placeholder {
        color: rgb(221, 221, 221);
    }
</style>
