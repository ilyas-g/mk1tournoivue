<template>
    <section class="black-section notFoundPage">
        <div class="container relative-content">
            <h1>Page introuvable</h1>
            <div class="links">
            <router-link to="/" class="btn-ope mb-4">Retourner à l'accueil</router-link>
            <router-link to="/rules" class="btn-ope mb-4">Consulter le règlement</router-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.notFoundPage {
    min-height: 70vh;
    position: relative;

    color: #fff;
    padding: 50px 35px;
    background: url("../assets/bg-notfound.webp") no-repeat fixed;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 26px;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, .5);
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
}

</style>
