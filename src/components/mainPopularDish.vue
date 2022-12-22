<script>

export default {

}
</script>

<template>
    <section class="container_site pb-5">

        <!-- titolo sezione -->
        <h2 class="pb-5">Our Most Popular Dishes</h2>

        <!-- sezione per le card -->
        <div class="d-flex">
            <div class="card">
                <img class="pb-3" src="../img/skin-on-fries-400x571.jpg" alt="">
                <div class="title pb-2">Skin On Fries</div>
                <div class="price">$3.00 _ $6.00</div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

section {
    padding-top: 150px;

    h2 {
        font-size: 50px;
        text-align: center;
        font-weight: 600;
    }

    .card {
        text-align: center;
        width: calc((100% / 3) - 10px);
        border: none;
    }

    .title {
        font-size: 30px;
        font-weight: 500;
    }

    .price {
        font-size: 18px;
        color: $brandThird;
    }

}
</style>