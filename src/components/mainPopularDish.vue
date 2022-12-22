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
    margin-top: -100px;
    clip-path: polygon(100% 100%, 0% 100%, 0.00% 44.40%, 1.00% 43.71%, 2.00% 42.99%, 3.00% 42.24%, 4.00% 41.47%, 5.00% 40.68%, 6.00% 39.87%, 7.00% 39.06%, 8.00% 38.24%, 9.00% 37.43%, 10.00% 36.62%, 11.00% 35.83%, 12.00% 35.06%, 13.00% 34.31%, 14.00% 33.59%, 15.00% 32.90%, 16.00% 32.25%, 17.00% 31.65%, 18.00% 31.09%, 19.00% 30.58%, 20.00% 30.13%, 21.00% 29.73%, 22.00% 29.40%, 23.00% 29.12%, 24.00% 28.91%, 25.00% 28.76%, 26.00% 28.68%, 27.00% 28.67%, 28.00% 28.72%, 29.00% 28.84%, 30.00% 29.03%, 31.00% 29.27%, 32.00% 29.59%, 33.00% 29.96%, 34.00% 30.39%, 35.00% 30.87%, 36.00% 31.41%, 37.00% 32.00%, 38.00% 32.63%, 39.00% 33.30%, 40.00% 34.00%, 41.00% 34.74%, 42.00% 35.50%, 43.00% 36.29%, 44.00% 37.09%, 45.00% 37.90%, 46.00% 38.72%, 47.00% 39.53%, 48.00% 40.34%, 49.00% 41.14%, 50.00% 41.92%, 51.00% 42.68%, 52.00% 43.42%, 53.00% 44.12%, 54.00% 44.78%, 55.00% 45.41%, 56.00% 45.99%, 57.00% 46.52%, 58.00% 47.00%, 59.00% 47.42%, 60.00% 47.79%, 61.00% 48.09%, 62.00% 48.33%, 63.00% 48.51%, 64.00% 48.62%, 65.00% 48.67%, 66.00% 48.64%, 67.00% 48.56%, 68.00% 48.40%, 69.00% 48.18%, 70.00% 47.90%, 71.00% 47.55%, 72.00% 47.15%, 73.00% 46.69%, 74.00% 46.18%, 75.00% 45.61%, 76.00% 45.00%, 77.00% 44.35%, 78.00% 43.66%, 79.00% 42.94%, 80.00% 42.19%, 81.00% 41.41%, 82.00% 40.62%, 83.00% 39.81%, 84.00% 38.99%, 85.00% 38.18%, 86.00% 37.36%, 87.00% 36.56%, 88.00% 35.77%, 89.00% 35.00%, 90.00% 34.25%, 91.00% 33.53%, 92.00% 32.85%, 93.00% 32.21%, 94.00% 31.61%, 95.00% 31.05%, 96.00% 30.55%, 97.00% 30.10%, 98.00% 29.71%, 99.00% 29.37%, 100.00% 29.10%);
}
</style>