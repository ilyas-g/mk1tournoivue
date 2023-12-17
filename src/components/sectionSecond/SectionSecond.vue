<template>
    <section id="event-section" className="black-section">
        <div className="orange bg-fixed bg-layer"></div>
        <div className="container relative-content">
            <div>
                <img :src="mkclogo" alt="Logo du Championnat de France de Mortal Kombat" className="inline-photo show-on-scroll is-visible" />
            </div>
            <div className="vertical-align-container">
                <div className="event-description vertical-align-content">
                    <h2 className="text-center">{t('slogan')}</h2>
                    <p className="text-center">{t('newEra')}<br />
                    {t('NSxCSupportedByWBGF')}<br />{t('MKchampionship')}</p>
                    <p className="text-center">{t('communityAdventure')}</p>
                    <p className="text-center">{t('ambassadors')}</p>
                    <p className="text-center">{t('frenchChampionshipOnly')}</p>
                    <p className="text-center">{t('ultimateChampion')}</p>
                </div>
            </div>
        </div>
        <div className="bg-gradient-transparent bg-layer"></div>
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
