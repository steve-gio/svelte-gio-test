<script>
    // 
    export let side;
</script>

<div class={side}>
    <slot />
</div>

<style>
    div {
        display: grid;
        grid-template-rows: 1.8fr 1fr;
        overflow: auto;
    }
    /* Left and Right parts of the main content  */
    .left {
        justify-content: right;
        background-color: black;
        padding-right: 10%;
    }
    .right {
        background-color: white;
        padding-left: 5%;
        padding-right: 5%;
        background: linear-gradient(180deg, rgba(255,255,255) 0%, rgba(255,255,255) 55%, rgba(250,250,250) 65%, rgba(229,229,229) 100%)
    }
</style>
