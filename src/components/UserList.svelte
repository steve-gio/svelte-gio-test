<script>
    import MinimalButton from "./MinimalButton.svelte";
    import SymmetricGrid from "./SymmetricGrid.svelte";
    import UserGrid from "./UserGrid.svelte";
    import {
        getFirestore,
        collection,
        getDocs,
        limit,
        query,
        orderBy,
    } from "firebase/firestore";
    import { SyncLoader } from "svelte-loading-spinners";

    const db = getFirestore();
    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    async function updateData() {
        let usersData = [];
        // Limiting query results in 10 units
        let queryResults = await getDocs(
            query(collection(db, "users"), orderBy("UserName"), limit(10))
        );
        await queryResults.forEach((doc) => {
            usersData.push(doc.data());
        });
        await sleep(1000); // Fake sleeping to show loader
        return usersData;
    }

    let updatePromise = updateData();

    function updateAction() {
        updatePromise = updateData();
    }
</script>

<SymmetricGrid side="right">
    <div class="dataContainer">
        <div id="banner">
            <p>UPDATE</p>
            <p>RECORDED DATA</p>
        </div>
        {#await updatePromise}
            <SyncLoader size="80" color="#FF3E00" unit="px" duration="1s" />
        {:then usersData}
            <UserGrid {usersData} />
        {/await}
    </div>

    <form on:submit|preventDefault={updateAction} id="action">
        <MinimalButton style="black" value="UPDATE" />
    </form>
</SymmetricGrid>

<style>
    .dataContainer {
        justify-items: center;
        display: grid;
        overflow: auto;
        grid-template-rows: 300px;
        position: relative;
    }
    /* Fade Out effect in user grid */
    .dataContainer:after {
        content: "";
        position: sticky;
        z-index: 1;
        bottom: 0;
        left: 0;
        pointer-events: none;
        background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1) 90%
        );
        width: 100%;
        height: 4em;
    }
    .dataContainer::-webkit-scrollbar {
        display: none;
    }
    #banner {
        padding-top: 8vh;
        padding-bottom: 10%;
    }
    p {
        color: black;
        font-size: 50px;
        text-align: center;
        margin: 0;
        letter-spacing: 7px;
        font-weight: 500;
    }
    #action {
        text-align: center;
    }
    
    form {
        margin-top: 4vh;
    }
</style>
