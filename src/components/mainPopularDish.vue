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

                <a href="#">
                    <div class="badge">
                        <font-awesome-icon icon="fa-solid fa-square-check" /> <br>
                        VIEW CART
                    </div>
                </a>

            </div>

            <div class="card mx-4">
                <img class="pb-3" src="../img/choco-cookie-frappe-400x571.jpg" alt="">
                <div class="title pb-2">Choco Cookie Frappe</div>
                <div class="price">$4.99</div>

                <a href="#">
                    <div class="badge">
                        <font-awesome-icon icon="fa-solid fa-square-check" /> <br>
                        VIEW CART
                    </div>
                </a>
            </div>

            <div class="card">
                <img class="pb-3" src="../img/donut-burger-400x571.jpg" alt="">
                <div class="title pb-2">The Donut Burger</div>
                <div class="price pb-5">$6.99</div>

                <a href="#">
                    <div class="badge">
                        <font-awesome-icon icon="fa-solid fa-square-check" /> <br>
                        VIEW CART
                    </div>
                </a>
            </div>
        </div>

        <div class="text-center pb-5">
            <button class="btn_red btn_medium ">
                START YOUR ORDER
                <span class="ps-2 none"><font-awesome-icon icon="fa-solid fa-circle-right" /></span>
            </button>
        </div>

    </section>

    <!-- jumbotron -->
    <section id="background"></section>

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
        width: calc((100% / 3) - 20px);
        border: none;
        position: relative;

        .badge {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 15px;
            display: none;

            .fa-square-check {
                font-size: 40px;
                color: black;
                padding-bottom: 10px;
            }
        }

        &:hover {
            .badge {
                display: block;
            }
        }
    }

    .title {
        font-size: 30px;
        font-weight: 400;
    }

    .price {
        font-size: 18px;
        color: $brandThird;
    }
}

#background {
    background-image: url(../img/first-order-background-scaled.jpg);
    background-position: center;
    background-size: cover;
    height: 500px;
}
</style>