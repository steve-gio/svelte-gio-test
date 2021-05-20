<script>
    export let value = "";
    export let style = "";
</script>

<button type="submit" class={style}>
    {value}
</button>

<style>
    button {
        border: 0;
        font-family: "Roboto Mono", monospace;
        width: 200px;
        justify-self: center;
        font-weight: bold;
        font-size: 25px;
        margin: 0;
        height: auto;
        width: 230px;
        padding: 5px;
        height: 50px;
    }
    .black {
        background-color: black;
        color: white;
    }
</style>
