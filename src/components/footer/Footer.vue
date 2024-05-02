<template lang="">
    <footer id="footer">
        <div>
            <div class="container">

                <ul class="footer-nav mb-4">
                    <li><a href="/#event-section">Présentation</a>
                    </li>
                    <li><a href="/#schedule">Étapes</a>
                    </li>
                    <li><a href="/#tournaments">Tournois</a>
                    </li>
                    <li @click="$emit('toggleContact')">Contact</li>
                    <li @click="$emit('toggleClassement')">Classement</li>
                </ul>

                <div>
                    <div class="follow-us">
                        <h4 class="text-center">Suivez NSXC</h4>
                        <p class="text-center">
                            <a href="https://twitter.com/_NSxC" target="_blank" class="ml-1 mr-1" aria-label="Twitter NSxC"><span class="icon-square-twitter"></span></a>
                        </p>
                    </div>
                </div>
                <div>
                    <div class="follow-us">
                        <h4 class="text-center">Suivez Warner Bros. Games France</h4>
                        <p class="text-center">
                            <a href="https://www.youtube.com/@warnerbros.gamesfrance1763" target="_blank" class="mr-1" aria-label="Chaîne Youtube de Warner Bros Games France"><span class="icon-youtube"></span></a>
                            <a href="https://twitter.com/wbgamesfr" target="_blank" class="ml-1 mr-1" aria-label="Twitter Warner Bros Games France"><span class="icon-square-twitter"></span></a>
                            <a href="https://www.instagram.com/wbgamesfr/" target="_blank" class="ml-1" aria-label="Instagram Warner Bros Games France"><span class="icon-instagram"></span></a>
                        </p>
                    </div>
                </div>
                <div>
                    <div class="follow-us">
                        <h4 class="text-center">Suivez MK France</h4>
                        <p class="text-center">
                            <a href="https://discord.gg/p5Ubc3r" target="_blank" class="ml-1" aria-label="Discord Mortal Kombat France"><span class="icon-discord-1"></span></a>
                            <a href="https://twitter.com/MK1_FRANCE" target="_blank" class="mr-1" aria-label="Twitter Mortal Kombat France"><span class="icon-square-twitter"></span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="follow-us text-center">
                    <img :src="NSXCLogo" class="mr-5 ml-5" alt="NSXC" />
                    <img :src="YuzuLogo" class="ml-5 mr-5" alt="Yuzu Gaming" />
                </div>
            </div>
        </div>
        <div class="footer-credits">
            Mortal Kombat - Championnat de France © <a href="https://yuzugaming.com" target="_blank">Yuzu Gaming</a> - 
            Site conçu et réalisé par <a href="https://twitter.com/iamarktall" target="_blank">Arktall
                (@iamarktall)</a>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NSXCLogo from '@/assets/NSXC_BLANC2.webp'
import YuzuLogo from '@/assets/logo-yuzu-gamingT2.webp'

</script>
<style lang="scss">
@import "../../variables";

#footer {
    color: #fff;
    padding: 50px 20px;
    border-top: 30px solid #ffc029;
    background: url("../../assets/00663.webp") no-repeat #000 fixed;
    background-size: cover;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
    display: block;

    .h4,
    h4 {
        font-size: 1.2rem;

        @media screen and (min-width: $media-queries-tablet) {

            font-size: 1.5rem;
        }
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

    .footer-nav {
        font-size: 24px;
        text-transform: uppercase;


        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
            margin-bottom: 0;
            padding: 0 15px;

            &:hover {
                cursor: pointer;
                color: #d99a2b;
            }
        }

        @media screen and (min-width: $media-queries-tablet) {
            display: unset;

            li {
                margin-bottom: 10px;
            }
        }
    }

    .follow-us {
        img {
            width: 180px;
        }

        span {
            font-size: 48px;
            display: inline-block;
            margin-right: 10px;
        }
    }

    .footer-credits {
        margin: 30px auto 0;
        padding: 15px;
        text-align: center;
        border-top: 1px solid #fff;
        font-size: 18px;

        a {
            color: #d99a2b;
        }
    }
}

</style>
