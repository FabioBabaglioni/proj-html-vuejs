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
    background-position: top;

    .container_hero {
        height: 850px;
    }

    nav {
        height: 100px;
    }

    img {
        width: 60%;
    }

    .active {
        color: $brandPrimary;
    }

    #scritta {
        height: calc(100% - 100px);

        .text_medium {
            font-size: 30px;
            line-height: 50px;
        }

        .text_big {
            font-size: 60px;
            font-weight: 800;
            line-height: 60px;
        }

        .co_brand {
            color: $brandPrimary;
        }
    }
}
</style>