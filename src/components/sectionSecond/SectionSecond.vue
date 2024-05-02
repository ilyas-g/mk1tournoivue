<template>
    <section id="event-section" class="black-section">
        <div class="orange bg-fixed bg-layer"></div>
        <div class="container relative-content align-center">
            <div>
                <img :src="mkclogo" alt="Logo du Championnat de France de Mortal Kombat" class="inline-photo show-on-scroll is-visible" />
            </div>
            <div class="vertical-align-container">
                <div class="event-description vertical-align-content">
                    <h2 class="text-center">C'EST DANS NOTRE SANG !</h2>
                    <p class="text-center">Une nouvelle ère démarre : l'ère du rassemblement !<br />
                        Le NSxC, soutenu par Warner Bros Games France, a le plaisir de vous annoncer:<br />
                        Le Championnat de France Mortal Kombat !</p>
                    <p class="text-center">Une aventure communautaire par la communauté et pour tous les amoureux de la licence.</p>
                    <p class="text-center">A l'initiative de Normann « FlashNo47 », soutenu par l'un des ambassadeurs émérites de la communauté, Elfrid « RZA », ainsi que de nombreux acteurs de la FGC tels que YUZU GAMING & SPRNTD, le championnat de France a pour objectif de rassembler les meilleurs combattants de l’Earthrealm français autour d’un championnat et de désigner qui sera notre grand Champion.</p>
                    <p class="text-center">Un championnat exclusif français avec près de 10000€ de Cash Prize à gagner sur l'ensemble du Championnat.</p>
                    <p class="text-center">Qui sera notre Ultime Champion ?</p>
                </div>
            </div>
        </div>
        <div class="bg-gradient-transparent bg-layer"></div>
    </section>
</template>
<script setup lang="ts">
import mkclogo from '../../assets/ChampionshipMK_LOGO2023_V2-2k.webp'

</script>
<style lang="scss">
@import "../../variables";

#event-section {
    background-image: url("../../assets/002.webp");
    background-size: cover;
    position: relative;

    h2 {
        margin-bottom: 10px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        @media screen and (min-width: $media-queries-desktop) {
            flex-wrap: nowrap;
            flex-direction: row;
        }
    }

    .align-center {
        align-items: center
    }

    img:first-child {
        width: 100%;

        @media screen and (min-width: $media-queries-mobile-small) {
            margin: auto;
        }

        @media screen and (min-width: $media-queries-tablet) {
            padding: 0 85px;
        }

        @media screen and (min-width: $media-queries-desktop) {
            margin: initial;
            padding: 0;
        }
    }
}

</style>
