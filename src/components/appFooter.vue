<script>
import footerNavigazione from "./footerNavigazione.vue"
import footerSubscribe from "./footerSubscribe.vue"
import { store } from "../store"


export default {
    components: {
        footerNavigazione, footerSubscribe
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- sezione per inserire il background -->
    <section id="background">
        <!-- sezione per rimpicciolire la width -->
        <div class="container_big d-flex justify-content-between">

            <!-- navigazione li -->
            <footerNavigazione :dati="store.orders" />

        </div>

        <div class="container_big">
            <!-- sezione subscribe in altro componente-->
            <footerSubscribe />
        </div>


    </section>
</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

section {
    color: $brandSecondary;
}

#background {
    background-image: url(../img/footer-background-scaled.jpg);
    background-size: cover;
    background-position: center;

    height: 1200px;

    .container_big {
        padding-top: 120px;
        width: 70%;
        margin: 0 auto;
    }

}
</style>