<template lang="">
    <section id="schedule-details" class="bg-cover">
    <div class="bg-layer"></div>

        <div>
            <div class="containerr relative-content">
                <div class="text-center order-2">
                    <h2 class="text-center">Master Event</h2>
                    <p>Le Master Event est la deuxième catégorie d'événement du championnat. Une série de tournois hors ligne organisé par le NSxC et des associations de la communauté de jeux de combats.</p>
                </div>
                <div class="vertical-align-container order-1" :style="{ position: relative }">
                    <AnimateImage />
                </div>
                <div class="text-center order-3">
                    <h2>Challenger Event</h2>
                    <p>Le challenger est la troisième catégorie d'évènement du championnat. Une série de tournois hors ligne organisée par le NSxC et des associations de la communauté de jeux de combats.</p>
                </div>
            </div>

            <div class="containerr relative-content">
                <div>
                    <h2 class="text-center">Online Community Event</h2>
                    <div>
                        <div class="text-center more-info">
                            <div class='ml-4 mr-4 mb-4'>
                                <p class="strong-text caps center-text">Ethernet obligatoire</p>
                                <img class="icon-ethernet" :src="ethernet" alt="Ethernet" />
                            </div>
                            <div class='ml-4 mr-4 mb-4'>
                                <p class="strong-text caps center-text">Seulement pour</p>
                                <img class="icon-flags" :src="drapeau" alt="French Flag" />
                            </div>
                            <div class='ml-4 mr-4 mb-4'>
                                <p class="strong-text caps center-text">Rejoignez le discord</p>
                                <a href="https://discord.gg/p5Ubc3r" target="_blank" class="ml-1" aria-label="Discord Mortal Kombat France"><span class="icon-discord-1"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="online-events">
                        <div class="text-center pr-5 pl-5 mb-5">
                            <p class="mb-5">L'opportunité pour n'importe quel organisateur de tournoi de contribuer à ce championnat.
                            <br/>Les « online community event » sont des événements ouverts à tous (Français uniquement). Pour soumettre son tournoi en ligne et être éligible, il vous suffit de contacter « FlashNo47 » par mail ou sur le discord MK France. Le NSxC proposera six tournois en ligne. Six autres tournois seront laissés à la disposition d'organisateurs de la communauté pour proposer leur propre tournoi. Les demandes devront être passées entre le 10 octobre 2023 et le 31 décembre 2023.
                            <br/>Les tournois devront avoir lieu entre le 10 Octobre 2023 et le 31 Janvier 2024.</p>
                            <RouterLink to="/rules" class="btn-ope special">Voir le règlement<span class="icon-chevron-down-solid-1" aria-hidden="true"></span></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import AnimateImage from "../animateImage/AnimateImage.vue"

import ethernet from "../../assets/ethernet.webp"
import drapeau from "../../assets/drapeauFR.webp"
</script>
<style lang="scss">
@import "../../variables";

#schedule-details {
    color: #fff;
    padding: 50px 35px;
    background-image: url('../../assets/WuAcademyDay_2.webp');
    position: relative;

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
    .icon-discord-1 {
        font-size: 40px;
    }

    .containerr {
        display: flex;
        flex-direction: column;

        .order-1 {
            order: 1;
        }

        .order-2 {
            order: 2;
        }

        .order-3 {
            order: 3;
        }

        @media screen and (min-width: $media-queries-desktop-xl) {

            flex-direction: row;
            align-items: center;

            .order-1,
            .order-2,
            .order-3 {
                order: unset;
            }

            &>div {
                flex: 1;
            }
        }
    }

    .online-events {
        @media screen and (min-width: $media-queries-desktop-xl) {
            display: flex;
        }
    }

    .more-info {
        @media screen and (min-width: $media-queries-tablet-small) {

            display: flex;
            justify-content: center;
        }
    }

    .character {
        margin: auto;
        width: 260px;

        @media screen and (min-width: $media-queries-mobile) {
            width: 300px;
        }

        @media screen and (min-width: $media-queries-tablet-small) {
            width: 400px;
        }
    }

    .btn-ope {
        max-width: 350px;
    }

    .streamers {
        display: flex;
        justify-content: space-around;
    }

    .icon-discord,
    .icon-ethernet,
    .icon-flags {
        width: 48px;
    }
}

</style>
