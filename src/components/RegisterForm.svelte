<script>
    import MinimalInput from "./MinimalInput.svelte";
    import MinimalButton from "./MinimalButton.svelte";
    import SymmetricGrid from "./SymmetricGrid.svelte";
    import { getFirestore } from "firebase/firestore";
    import { collection, addDoc } from "firebase/firestore";
    const db = getFirestore();
    let user = {};
    async function registerAction() {
        try {
            const docRef = await addDoc(collection(db, "users"), user);
            user.UserName = user.Email = user.ImageLink = "";
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
</script>

<SymmetricGrid side="left">
    <div class="dataContainer">
        <div id="banner" class="white">
            <p>ENTER THE DATA</p>
            <p>TO THE REGISTER</p>
        </div>

        <div id="form">
            <form on:submit|preventDefault={registerAction}>
                <MinimalInput
                    bind:value={user.UserName}
                    placeholder="User Name"
                />
                <MinimalInput bind:value={user.Email} placeholder="Email" />
                <MinimalInput
                    bind:value={user.ImageLink}
                    placeholder="Image Link"
                />
                <div id="action">
                    <MinimalButton style="white" value="SEND" />
                </div>
            </form>
        </div>
    </div>
</SymmetricGrid>

<style>
    .dataContainer {
        justify-items: center;
        display: grid;
        grid-template-rows: 300px;
    }
    form {
        display: grid;
        grid-auto-flow: row;
        width: 80%;
        align-content: center;
        row-gap: 8%;
    }
    #banner {
        padding-top: 8vh;
        padding-bottom: 10%;
    }
    #banner p {
        color: white;
        font-size: 50px;
        text-align: center;
        margin: 0;
        letter-spacing: 7px;
        font-weight: 500;
    }
    #action {
        text-align: center;
        margin-bottom: 13px;
    }
</style>
