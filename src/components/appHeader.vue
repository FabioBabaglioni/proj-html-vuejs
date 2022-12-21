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
            <span class="text_medium">
                <font-awesome-icon icon="fa-regular fa-clock" />
                24/7 DELIVERY
            </span>
            <span class="text_medium">
                <font-awesome-icon icon="fa-solid fa-burger" />
                OVER 100 DISHES
            </span>
            <span class="text_medium">
                <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
                IN APP ORDERING
            </span>
            <span class="text_medium">
                <font-awesome-icon icon="fa-solid fa-car" />
                FAST DELIVERY
            </span>
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
    background-position: top;
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
}
</style>