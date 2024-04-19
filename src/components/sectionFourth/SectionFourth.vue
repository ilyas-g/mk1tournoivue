<template>
    <section id="tournaments" className="black-section">
        <div className="container relative-content">
            <h2 className="text-center">Tournois</h2>
            <!-- <div className='subtitles'>
                <h3 className={`subtitle ${tournamentsCheck === true ? 'activeLang' : '' }`} onClick={() => setTournamentsCheck(true)}>{t('upcomingTournaments')}</h3>
                <h3 className={`subtitle ${tournamentsCheck === false ? 'activeLang' : '' }`} onClick={() => setTournamentsCheck(false)}>{t('finishedTournaments')}</h3>
            </div> -->

            <!-- <div className="tournaments">
                <div className="cards inline-itemList show-on-scroll is-visible">
                    <Card
                    title="frfrf"
                    numAttendees="15"
                    venueAddress="Online ou adresse"
                    date="02/01/2020"
                    />
                </div>
            </div> -->
            <div v-if="loading"><Spinner/></div>
            <div v-else-if="error">{{ error.message }}</div>
            <div className="tournaments" v-else-if="users">
                <div className="cards inline-itemList show-on-scroll is-visible" v-for="event of users" :key="event.id">
                    <Card
                    :title=event.name
                    :linkPhotos="cardImages(event.id, event.tournament.venueAddress, event.tournament.images[0].url, event.tournament.images[0].url)"
                    linkVideo="https://www.youtube.com/watch?v=JBVP-XdMfJo"
                    :link="`https://www.start.gg/${event.slug}`"
                    :numAttendees=event.numEntrants
                    :venueAddress="event.isOnline === true ? 'Online' : event.tournament.venueAddress"
                    :date=datetime
                    :active-card="false"
                    @some-event="() => bool = true"
                    />

                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
// :linkPhotos="event.tournament.venueAddress ?event.tournament.images[0].url : event.tournament.images[1].url"

import btf1 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1010-SMALL.webp'
import btf2 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1710-SMALL.webp'
import btf3 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1411-SMALL.webp'
import btf4 from '../../assets/tournamentsImg/MK-BTF-ONLINE-31-10-SMALL.webp'
import btf5 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1212-SMALL.webp'
import btf6 from '../../assets/tournamentsImg/MK-BTF-ONLINE-28-11-SMALL.webp'
import pgw2023 from '../../assets/tournamentsImg/PGW-MASTER-EVENT+-SMALL.webp'
import versusxperience from '../../assets/tournamentsImg/versusxperience.webp'

import Spinner from '../spinner/Spinner.vue';
import Card from '../card/Card.vue';
import { watch, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import {CARD_QUERY} from "../../queries/queries"
import * as albums from "../../queries/data.json"

const { result, loading, error } = useQuery(CARD_QUERY)

// watch(result, value => {
//       console.log(value.league.events.nodes.startAt)
//     })

let bool = false
const users = computed(() => result.value?.league.events.nodes ?? [])

const locallll = computed(() => {
    result.value?.league.events.nodes.map((x : any) => {
        if (x.isOnline === true) {
            return "Online"
        } else {
            return x.tournament.venueAddress
        }
    })
})

function cardImages(id: string, venueAddress:string, image1: string, image2: string) {
    if (id == '989730') {
            return btf1
    } else if (id == '989731') {
        return btf2
    } else if (id == '989734') {
        return btf4
    } else if (id == '989712') {
        return btf3
    } else if (id == '989714') {
        return btf6
    } else if (id == '989715') {
        return btf5
    } else if (id == "1005230") {
        return pgw2023
    }  else if (id == "1064403") {
        return versusxperience
    } else {
        if (venueAddress) {
            return image1;
        } else {
            return image2;
        }
    }
}

watch(users, value => {
    value.map((x: any) => console.log(x.isOnline))
})

// watch(users, value => {console.log('users' + value)})
// watch(locallll, value => {console.log('local' + value)})

const datetime = new Date(users.startAt * 1000).toLocaleDateString("fr");

</script>
<style lang="scss">
@import "./style.scss";
</style>
