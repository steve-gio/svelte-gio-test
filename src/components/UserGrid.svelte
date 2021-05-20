<script>
    export let usersData;

    // Handling an image link with an invalid image
    function image_error(image) {
        image.src = "images/noimage.svg";
    }
</script>

<div id="users">
    <!-- Iterate each user to display it in the final user grid -->
    {#each usersData as user}
        <div class="user">
            <img
                on:error={(e) => image_error(e.target)}
                src={user.ImageLink}
                alt="Registered User"
            />
            <div class="userText">
                <p class="userName">{user.UserName}</p>
                <p class="email">{user.Email}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .userName {
        font-size: 20px;
        font-weight: bold;
    }
    .email {
        font-size: 80%;
    }
    #users {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
        row-gap: 30px;
        padding-right: 5%;
    }
    .user {
        display: grid;
        grid-template-rows: 2fr 1.5fr;
        text-align: center;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        box-shadow: 0px 0px 20px rgb(165 165 165 / 30%);
    }

    .userText {
        align-self: center;
        display: grid;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
    }

    p {
        margin: 0;
    }

    img {
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        width: 272px;
        height: 143px;
        object-fit: cover;
    }
</style>
