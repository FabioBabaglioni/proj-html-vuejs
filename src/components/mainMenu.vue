<script>

export default {

}
</script>

<template>
    <section class="container_site pb-5">
        <div class="d-flex justify-content-between">
            <h2>Menu categories</h2>

            <div>
                <button class="btn_red btn_medium">
                    VIEW THE FULL MENU
                    <span class="ps-2 none"><font-awesome-icon icon="fa-solid fa-circle-right" /></span>
                </button>
            </div>

        </div>

        <!-- container card -->
        <div class="d-flex flex-wrap py-5">
            <div class="card">
                <img class="img_card" src="../img/appetizers-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">APPETIZERS</div>
            </div>

            <div class="card">
                <img class="img_card" src="../img/burgers-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">BURGERS</div>
            </div>

            <div class="card">
                <img class="img_card" src="../img/pizza-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">PIZZA</div>
            </div>

            <div class="card">
                <img class="img_card" src="../img/fries-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">FRIES</div>
            </div>

            <div class="card">
                <img class="img_card" src="../img/sides-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">SIDES</div>
            </div>

            <div class="card">
                <img class="img_card" src="../img/desserts-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">DESSERTS</div>
            </div>

            <div class="card">
                <img class="img_card" src="../img/beverages-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">BEVERAGES</div>
            </div>

            <div class="card">
                <img class="img_card" src="../img/specials-menu-background.jpg" alt="">
                <div class="black"></div>
                <div class="title">SPECIALS</div>
            </div>

        </div>

        <div class="d-flex justify-content-around">
            <div class="badge">
                <font-awesome-icon class="pb-4 icon" icon="fa-solid fa-leaf" />
                <div class="type">Vegetarian</div>
            </div>

            <div class="badge">
                <font-awesome-icon class="pb-4 icon" icon="fa-solid fa-wheat-awn" />
                <div class="type">Gluten free</div>
            </div>

            <div class="badge">
                <font-awesome-icon class="pb-4 icon" icon="fa-solid fa-bottle-water" />
                <div class="type">Dairy free</div>
            </div>

            <div class="badge">
                <font-awesome-icon class="pb-4 icon" icon="fa-solid fa-bacon" />
                <div class="type">Keto friendly</div>
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

        margin: 5px;
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

    .badge {
        text-align: center;

        .icon {
            font-size: 60px;
        }

        .fa-leaf {
            color: #8fbf70;
        }

        .fa-wheat-awn {
            color: #ffc107;
        }

        .fa-bottle-water {
            color: #44a2ea;
        }

        .fa-bacon {
            color: #a1581c;
        }

        .type {
            font-size: 20px;
            font-weight: 500;
            color: black;
        }
    }
}
</style>