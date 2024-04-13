<template>
    <section id="tournaments" className="black-section">
        <div className="container relative-content">
            <h2 className="text-center">Tournois</h2>
            <!-- <div className='subtitles'>
                <h3 className={`subtitle ${tournamentsCheck === true ? 'activeLang' : '' }`} onClick={() => setTournamentsCheck(true)}>{t('upcomingTournaments')}</h3>
                <h3 className={`subtitle ${tournamentsCheck === false ? 'activeLang' : '' }`} onClick={() => setTournamentsCheck(false)}>{t('finishedTournaments')}</h3>
            </div> -->

            <div className="tournaments">
                <div className="cards inline-itemList show-on-scroll is-visible">
                    <Card 
                    title="frfrf"
                    numAttendees="15"
                    venueAddress="Online ou adresse"
                    date="02/01/2020"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import btf1 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1010-SMALL.webp'
import btf2 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1710-SMALL.webp'
import btf3 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1411-SMALL.webp'
import btf4 from '../../assets/tournamentsImg/MK-BTF-ONLINE-31-10-SMALL.webp'
import btf5 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1212-SMALL.webp'
import btf6 from '../../assets/tournamentsImg/MK-BTF-ONLINE-28-11-SMALL.webp'
import pgw2023 from '../../assets/tournamentsImg/PGW-MASTER-EVENT+-SMALL.webp'
import versusxperience from '../../assets/tournamentsImg/versusxperience.webp'

import Spinner from '../spinner/Spinner';
import Card from '../card/Card.vue';
</script>
<style lang="scss">
@import "../../variables";

#tournaments {
    background: url("../../assets/007.webp") no-repeat fixed;
    background-size: cover;

    .subtitles {
        display: flex;
        justify-content: space-around;
        background-color: rgba(0, 0, 0, 0.7);
        border: 1px solid $border;
        margin: 35px 17px;

        .subtitle {
            margin: 0;
            transition: all 0.25s ease 0s;

            &:hover {
                color: #d99a2b;
                cursor: pointer;
            }

            &.activeLang {
                font-weight: 700;
                // text-decoration: underline;
            }
        }
    }
}

.tournaments {
    display: flex;
    // flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}

#tournaments .active h3::after {
    background: #f54d04;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffc029", endColorstr="#ddbf66", GradientType=1);
    transition: width 0.4s;
    content: "";
    display: block;
    height: 2px;
    height: 0.13rem;
    margin: 0.63rem auto 0;
    width: 100%;
    position: absolute;
    bottom: -5px;
}

</style>
