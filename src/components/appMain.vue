<script>
import mainPopularDishVue from './mainPopularDish.vue';
import mainMenuVue from './mainMenu.vue';
import mainOrderVue from './mainOrder.vue';
import mainNewsVue from './mainNews.vue';

export default {
    components: {
        mainPopularDishVue, mainMenuVue, mainOrderVue, mainNewsVue
    }
}
</script>

<template>
    <mainPopularDishVue />

    <mainMenuVue />

    <mainOrderVue />

    <mainNewsVue />

</template>

<style scoped lang="scss">

</style>