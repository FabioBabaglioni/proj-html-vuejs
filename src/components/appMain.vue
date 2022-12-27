<script>
import mainPopularDishVue from './mainPopularDish.vue';
import mainMenuVue from './mainMenu.vue';
import mainOrderVue from './mainOrder.vue';
import mainNewsVue from './mainNews.vue';
import { store } from "../store"

export default {
    components: {
        mainPopularDishVue, mainMenuVue, mainOrderVue, mainNewsVue
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <mainPopularDishVue />

    <mainMenuVue :cards="store.orders" />

    <mainOrderVue />

    <mainNewsVue />

</template>

<style scoped lang="scss">

</style>