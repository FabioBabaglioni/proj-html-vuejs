import { reactive } from "vue";

export const store = reactive({
    orders: [
        {
            title: "Apetizer",
            url: "#",
            img: "src/img/appetizers-menu-background.jpg"
        },
        {
            title: "Burgers",
            url: "#",
            img: "src/img/burgers-menu-background.jpg"
        },
        {
            title: "Pizza",
            url: "#",
            img: "src/img/pizza-menu-background.jpg"
        },
        {
            title: "fries",
            url: "#",
            img: "src/img/fries-menu-background.jpg"
        },
        {
            title: "Sides",
            url: "#",
            img: "src/img/sides-menu-background.jpg"
        },
        {
            title: "Dessert",
            url: "#",
            img: "src/img/desserts-menu-background.jpg"
        },
        {
            title: "Beverages",
            url: "#",
            img: "src/img/beverages-menu-background.jpg"
        },
        {
            title: "Specials",
            url: "#",
            img: "src/img/specials-menu-background.jpg"
        },
    ],
})