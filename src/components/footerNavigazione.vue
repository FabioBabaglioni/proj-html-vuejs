<script>

export default {
    data() {
        return {
            orders: [
                {
                    li: "Apetizer",
                    href: "#"
                },
                {
                    li: "Burgers",
                    href: "#"
                },
                {
                    li: "Pizza",
                    href: "#"
                },
                {
                    li: "fries",
                    href: "#"
                },
                {
                    li: "Sides",
                    href: "#"
                },
                {
                    li: "Dessert",
                    href: "#"
                },
                {
                    li: "Beverages",
                    href: "#"
                },
                {
                    li: "Specials",
                    href: "#"
                },
            ],
            navigates: [
                {
                    li: "Home",
                    href: "#"
                },
                {
                    li: "Alternate Home",
                    href: "#"
                },
                {
                    li: "Menu",
                    href: "#"
                },
                {
                    li: "About",
                    href: "#"
                },
                {
                    li: "News",
                    href: "#"
                },
                {
                    li: "Contact US",
                    href: "#"
                },
                {
                    li: "Cart",
                    href: "#"
                },
            ],
            informations: [
                {
                    li: "My account",
                    href: "#"
                },
                {
                    li: "Terms of service",
                    href: "#"
                },
                {
                    li: "Privacy police",
                    href: "#"
                }
            ],
            orari: [
                {
                    day: "Mon - ",
                    hour: "10AM to 11PM"
                },
                {
                    day: "Tue - ",
                    hour: "10AM to 11PM"
                },
                {
                    day: "Wed - ",
                    hour: "10AM to 11PM"
                },
                {
                    day: "Thu - ",
                    hour: "10AM to 11PM"
                },
                {
                    day: "Fri - ",
                    hour: "10AM to 11PM"
                },
                {
                    day: "Sat - ",
                    hour: "10AM to 11PM"
                },
                {
                    day: "San - ",
                    hour: "10AM to 11PM"
                },

            ]
        }
    }
}
</script>

<template>

    <!-- serie di ul con li  -->
    <div>
        <span class="pb-5">ORDER ONLINE</span>
        <ul class="pt-4">
            <li class="pb-4" v-for="(order, index) in orders" :key="index"> <a :href="order.href">{{ order.li }}</a>
            </li>
        </ul>
    </div>
    <div>
        <span>NAVIGATE</span>
        <ul class="pt-4">
            <li class="pb-4" v-for="(navigate, index) in navigates" :key="index"><a :href="navigate.href">{{ navigate.li
            }}</a></li>
        </ul>
    </div>
    <div>
        <span>INFORMATION</span>
        <ul class="pt-4">
            <li class="pb-4" v-for="(info, index) in informations" :key="index"><a :href="info.href">{{ info.li }}</a>
            </li>
        </ul>
        <!-- <div>
            <a href="#"><img class="badge_small pb-2" src="../img/app-store-badge-200x67.png" alt=""></a> <br>
            <a href="#"><img class="badge_small" src="../img/play-store-badge-200x67.png" alt=""></a>
        </div> -->
    </div>
    <div>
        <span>OPENING HOURS</span>
        <ul class="pt-4">
            <li class="pb-2" v-for="(orario, index) in orari" :key="index">
                <span>{{ orario.day }}</span>
                <span class="orario">{{ orario.hour }}</span>
            </li>
        </ul>
    </div>
    <div>
        <span>VOUCER</span>
        <ul>
            <li>{{ }}</li>
        </ul>
    </div>



</template>

<style scoped lang="scss">
@use "./style/partials/variables.scss" as *;

ul {
    padding-left: 0;

    li {
        font-size: 12px;

        a {
            color: $brandSecondary;

            &:hover {
                color: $brandPrimary;
                cursor: pointer;
            }
        }

        .orario {
            color: $brandPrimary;
        }
    }
}

.badge_small {
    width: 60%;
}
</style>