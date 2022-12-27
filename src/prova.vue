<script>

export default {

}
</script>

<template>
    <img src="./img/appetizers-menu-background.jpg" alt="">
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