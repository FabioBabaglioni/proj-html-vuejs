<script>

export default {

}
</script>

<template>
    <section id="background">
        <div class="container_site scritta">
            <div id="text_medium">Dowload Our</div>
            <div id="text_big">Ordering App</div>
            <div class="d_flex">
                <a href="#"><img class="pe-4" src="../img/app-store-badge-200x67.png" alt=""></a>
                <a href="#"><img src="../img/play-store-badge-200x67.png" alt=""></a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

#background {
    background-image: url(../img/app-ordering-scaled.jpg);
    background-size: 130%;
    background-position: top;
    height: 600px;
    margin: 100px 0;

    .scritta {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        #text_medium {
            font-size: 40px;
            font-weight: 600;
            color: $brandSecondary;
            line-height: 5px;
        }

        #text_big {
            font-size: 80px;
            font-weight: 700;
            color: $brandPrimary;
        }
    }
}
</style>