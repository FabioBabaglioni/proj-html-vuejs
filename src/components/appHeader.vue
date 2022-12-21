<script>
import headerNavBar from "./headerNavbar.vue"

export default {
    components: {
        headerNavBar
    }
}
</script>

<template>
    <!-- sezione per inserimento immagine di sfondo -->
    <section id="background">

        <div class="container_site container_hero">

            <!-- navbar -->
            <headerNavBar />

            <div class="d-flex align-items-center" id="scritta">
                <!-- scritta societaria  -->
                <div>
                    <div class="text_medium">Hungry?</div>
                    <div class="text_big co_brand">Great Food</div>
                    <div class="text_big">Delivered</div>

                    <!-- button -->
                    <button class="btn_red btn_medium mt-4">
                        <span>View our menù</span>
                        <span class="ps-2"><font-awesome-icon icon="fa-solid fa-circle-right" /></span>
                    </button>
                </div>
            </div>
        </div>

        <!-- section in position absolute con informazioni delivery -->
        <div id="info_delivery" class="d-flex justify-content-around align-items-center">
            <div class="text_medium">
                <span class="pe-2"><font-awesome-icon icon="fa-regular fa-clock" /></span>
                24/7 DELIVERY
            </div>
            <div class="text_medium">
                <span class="pe-2"><font-awesome-icon icon="fa-solid fa-burger" /></span>
                OVER 100 DISHES
            </div>
            <div class="text_medium">
                <span class="pe-2"><font-awesome-icon icon="fa-solid fa-mobile-screen-button" /></span>
                IN APP ORDERING
            </div>
            <div class="text_medium">
                <span class="pe-2"><font-awesome-icon icon="fa-solid fa-car" /></span>
                FAST DELIVERY
            </div>
        </div>

        <!-- section per button + e banner quadrai in position absolute -->
        <div>
            <!-- banner plus -->
            <div id="btn_plus">
                <font-awesome-icon icon="fa-solid fa-plus" />
            </div>

            <!-- banner demos-->
            <div class="card card_top flex-column justify-content-center">
                <span id="prezzo"></span>
                <div id="onSale">Demos</div>
            </div>

            <!-- banner on sale -->
            <div class="card card_down flex-column justify-content-center">
                <span id="prezzo">$39</span>
                <div id="onSale">On sale</div>
            </div>
        </div>
    </section>


</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

#background {
    background-image: url("../img/home-background-hero-scaled.jpg");
    background-size: cover;
    background-position: center;
    position: relative;

    .container_hero {
        height: 850px;
    }

    nav {
        height: 100px;
    }

    img {
        width: 60%;
    }

    #scritta {
        height: calc(100% - 100px);

        .text_medium {
            font-size: 30px;
            line-height: 50px;
            color: $brandSecondary;
        }

        .text_big {
            font-size: 60px;
            font-weight: 800;
            line-height: 60px;
            color: $brandSecondary;
        }

        .co_brand {
            color: $brandPrimary;
        }
    }

    #info_delivery {
        width: 50%;
        background-color: $brandSecondary;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: -50px;
        color: $textColor;

        // DEBUG
        height: 100px;

        .text_medium {
            font-size: .8rem;
        }
    }

    #btn_plus {
        color: $brandSecondary;
        background-color: $brandThird;
        border-radius: 50%;
        padding: 15px;
        position: absolute;
        top: 10px;
        right: 20px;
    }

    .card {
        background-color: $brandSecondary;
        height: 50px;
        width: 50px;
        border-radius: 10px;

    }

    .card_down {
        position: absolute;
        top: 200px;
        right: 20px;
    }

    .card_top {
        position: absolute;
        top: 145px;
        right: 20px;
    }

    #prezzo {
        color: #7bc58e;
        font-size: 20px;
        text-align: center;
        font-weight: 450;
        line-height: 20px;
    }

    #onSale {
        font-size: 12px;
        text-align: center;
        font-weight: 500;
    }
}
</style>