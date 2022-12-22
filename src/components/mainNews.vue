<script>

export default {

}
</script>

<template>
    <section class="container_site">
        <div class="d-flex justify-content-between pb-5">
            <h2>Lates News</h2>

            <button class="btn_red btn_small">READ MORE NEWS</button>
        </div>

        <div class="d-flex pb-5">
            <div class="card">
                <img src="../img/pancake-burger-600x450.jpg" alt="">
                <div class="title pt-4">NEW: The Pancake Burger</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis repudiandae praesentium, tempore
                    maxime, aperiam iure excepturi repellendus, eaque molestiae provident saepe expedita porro eveniet?
                    Temporibus aperiam sunt numquam quidem optio! </p>
            </div>

            <div class="card card_right">
                <img src="../img/new-milkshake-menu-600x450.jpg" alt="">
                <div class="title pt-4">NEW: Milkshake Menu</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis repudiandae praesentium, tempore
                    maxime, aperiam iure excepturi repellendus, eaque molestiae provident saepe expedita porro eveniet?
                    Temporibus aperiam sunt numquam quidem optio! </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

section {
    padding-bottom: 80px;
}

h2 {
    font-size: 40px;
    font-weight: 600;
}

.card {
    width: calc(100% / 2);
    border: none;
    text-align: center;
    margin-right: 40px;

    .title {
        font-size: 40px;
        font-weight: 500;
    }

    p {
        color: rgb(160, 160, 160);
        display: none;
    }

    &:hover {
        p {
            display: block;
        }
    }
}

.card_right {
    margin: 0;
}
</style>