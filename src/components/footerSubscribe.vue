<script>


export default {

}
</script>

<template>
    <!-- immagine logo -->
    <div id="img_logo" class="pb-4">
        <img src="../img/takeout-logo-2x-200x43.png" alt="">
    </div>

    <!-- frase effetto -->
    <div id="frase" class="pb-2">
        Stay In The loop
    </div>

    <!-- frase sign up -->
    <div id="text_medium" class="pb-4">Sign up to receive up to date news and offers directly in your inbox:</div>

    <form class="pb-3">
        <input type="text" placeholder="you@email.com" id="input" class="mb-4"> <br>
        <button @click.prevent="" class=" btn_red btn_big">SUBSCRIBE</button>
    </form>

    <!-- social icon -->
    <div class="d-flex justify-content-around py-4" id="social">
        <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-youtube" /></a>
        <a href=""><font-awesome-icon icon="fa-regular fa-envelope" /></a>
    </div>

    <!-- testo copy -->
    <div>
        <div class="text_small">
            <span class="yellow"><font-awesome-icon icon="fa-solid fa-copyright" /></span>
            <span class="yellow"> Copyright 2020 - 2022 | Avada Theme by</span>
            <span>Fabio Babaglioni</span>
            <span class="yellow">| All Right Reserved | Power by</span>
            <span>Baba Srl</span>
        </div>
    </div>


</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

* {
    text-align: center;
}

#frase {
    font-size: 40px;
    font-weight: 600;
    color: $brandPrimary;
}

#text_medium {
    font-size: 12px;
}

#input {
    border-radius: 20px;
    border: 1px solid white;
    text-align: left;
    padding: 5px 10px;
    width: 40%;

    &:click {
        border: 1px solid $brandThird;
    }
}

.btn_big {
    width: 40%;
    padding: 5px;
}

#social {
    width: 20%;
    margin: 0 auto;
}

.text_small {
    font-size: 10px;
    padding-bottom: 100px;
}

.yellow {
    color: $brandPrimary;
    background-color: rgba($color: #000000, $alpha: .0);
}
</style>