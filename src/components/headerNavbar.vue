<script>

export default {

}
</script>

<template>
    <!-- sezione per inserimento immagine di sfondo -->

    <nav class="d-flex  align-items-center">
        <div class="container">
            <div class="row">

                <!-- logo -->
                <div class=" col-4">
                    <img src="../img/takeout-logo.png" alt="">
                </div>

                <!-- navigazione sito con riferimento ai data-->
                <div class="col-8">
                    <ul class="d-flex justify-content-around">
                        <li class=" active">Home v</li>
                        <li class="">Order Online</li>
                        <li class="">About</li>
                        <li class="">News</li>
                        <li class="">Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>



</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

#background {

    nav {
        height: 100px;
    }

    img {
        width: 60%;
    }

    .active {
        color: $brandPrimary;
    }
}
</style>