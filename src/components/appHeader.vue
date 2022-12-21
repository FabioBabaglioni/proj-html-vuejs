<script>

export default {

}
</script>

<template>
    <!-- sezione per inserimento immagine di sfondo -->
    <section id="background">

        <div class="container_site pt-5">
            <nav class="d-flex justify-content-between align-items-center">
                <!-- logo -->
                <img src="../img/takeout-logo.png" alt="">

                <!-- navigazione sito con riferimento ai data-->

                <ul class="d-flex">
                    <li class="pe-5 active">Home v</li>
                    <li class="pe-5">Order Online</li>
                    <li class="pe-5">About</li>
                    <li class="pe-5">News</li>
                    <li class="pe-5">Contact Us</li>
                </ul>

            </nav>

            <div>
                <!-- scritta societaria  -->
                <!-- button -->
            </div>
        </div>
        <!-- nav bar -->



        <!-- section in position absolute con informazioni delivery -->
        <div>

        </div>
        <!-- section per button + e banner quadrai in position absolute -->
        <div>

        </div>
    </section>


</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

#background {
    background-image: url("../img/home-background-hero-scaled.jpg");
    background-size: cover;
    background-position: bottom;
    height: 800px;

    img {
        width: 20%;
    }

    .active {
        color: $brandPrimary;
    }
}
</style>