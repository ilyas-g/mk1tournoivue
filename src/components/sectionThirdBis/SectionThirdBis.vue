<template lang="">
    <section id="schedule-details" className="bg-cover">
    <div className="bg-layer"></div>

        <div>
            <div className="containerr relative-content">
                <div className="text-center order-2">
                    <h2 className="text-center">Master Event</h2>
                    <p>{t('masterEvent')}</p>
                </div>
                <!-- <div className="vertical-align-container order-1" :style="{ position: relative }">
                    <AnimateImage />
                </div> -->
                <div className="text-center order-3">
                    <h2>Challenger Event</h2>
                    <p>{t('challengerEvent')}</p>
                </div>
            </div>

            <div className="containerr relative-content">
                <div>
                    <h2 className="text-center">Online Community Event</h2>
                    <div>
                        <div className="text-center more-info">
                            <div className='ml-4 mr-4 mb-4'>
                                <p className="strong-text caps center-text">{t('ethernet')}</p>
                                <img className="icon-ethernet" :src="ethernet" alt="Ethernet" />
                            </div>
                            <div className='ml-4 mr-4 mb-4'>
                                <p className="strong-text caps center-text">{t('onlyFor')}</p>
                                <img className="icon-flags" :src="drapeau" alt="French Flag" />
                            </div>
                            <div className='ml-4 mr-4 mb-4'>
                                <p className="strong-text caps center-text">{t('discord')}</p>
                                <a href="https://discord.gg/p5Ubc3r" target="_blank" className="ml-1" aria-label="Discord Mortal Kombat France"><span className="icon-discord-1"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="online-events">
                        <div className="text-center pr-5 pl-5 mb-5">
                            <p className="mb-5">{t('onlineCommunityEventOpportunity')}
                            <br/>{t('onlineCommunityEventGlobal')}
                            <br/>{t('onlineCommunityEventDates')}</p>
                            <Link to="/rules" className="btn-ope special">{t('seeTheRules')}<span className="icon-chevron-down-solid-1" aria-hidden="true"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
// import AnimateImage from "../animateImage/AnimateImage"

import ethernet from "../../assets/ethernet.webp"
import drapeau from "../../assets/drapeauFR.webp"
</script>
<style lang="scss">
@import "../../variables";

#schedule-details {
    color: #fff;
    padding: 50px 35px;
    background-image: url('../../assets/WuAcademyDay_2.webp');

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
