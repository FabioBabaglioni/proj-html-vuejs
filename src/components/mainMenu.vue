<script>

export default {

}
</script>

<template>
    <section class="container_site pb-5">
        <div class="d-flex justify-content-around">
            <h2>Menu categories</h2>

            <button class="btn_red btn_small">VIEW THE FULL MENU</button>
        </div>

        <div class="d-flex flex-wrap pt-5">
            <div class="card">
                <img class="img_card" src="../img/appetizers-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">APPETIZERS</div>
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

section {
    padding-top: 120px;

    h2 {
        font-size: 40px;
        font-weight: 600;
    }

    .btn_small {
        padding: -10px;
    }

    .card {
        width: calc((100% / 4) - 10px);
        position: relative;

        .black {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba($color: #000000, $alpha: .4);
        }

        .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: $brandSecondary;
            font-size: 18px;
            font-weight: 500;


        }
    }
}
</style>