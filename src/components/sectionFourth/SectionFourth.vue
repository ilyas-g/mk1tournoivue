<template>
    <section id="tournaments" className="black-section">
        <div className="container relative-content">
            <h2 className="text-center">Tournois</h2>
            <div className='subtitles'>
                <h3 class="subtitle" @click="toggleState(true)" :class="isCollapsed === true && 'activeLang' ">Résultats finaux</h3>
                <h3 class="subtitle" @click="toggleState(false)" :class="isCollapsed === false && 'activeLang' ">Tournois</h3>
            </div>

            <div v-if="isCollapsed === true">
                <p>R2SUKTATTTTSSSS</p>
            </div>

            <div v-else>
                <div v-if="loading"><Spinner/></div>
                <div v-else-if="error">{{ error.message }}</div>
                <div className="tournaments" v-else-if="users">
                    <div className="cards inline-itemList show-on-scroll is-visible" v-for="event of users" :key="event.id">

                        <Card
                        :title="`${event.id} - ${event.name}`"
                        :linkPhotos="cardImages(event.id, event.tournament.venueAddress, event.tournament.images[0].url, event.tournament.images[1].url)"
                        :linkVideo="cardVideos(event.id)"
                        :link="`https://www.start.gg/${event.slug}`"
                        :numAttendees=event.numEntrants
                        :venueAddress="event.isOnline === true ? 'Online' : event.tournament.venueAddress"
                        :date="new Date(event.startAt * 1000).toLocaleDateString('fr')"
                        :active-card="false"
                        @some-event="() => bool = true"
                        />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
// linkVideo="https://www.youtube.com/watch?v=JBVP-XdMfJo"
// :linkVideo="`https://www.youtube.com/watch?v=${event.id}`"

import btf1 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1010-SMALL.webp'
import btf2 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1710-SMALL.webp'
import btf3 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1411-SMALL.webp'
import btf4 from '../../assets/tournamentsImg/MK-BTF-ONLINE-31-10-SMALL.webp'
import btf5 from '../../assets/tournamentsImg/MK-BTF-ONLINE-1212-SMALL.webp'
import btf6 from '../../assets/tournamentsImg/MK-BTF-ONLINE-28-11-SMALL.webp'
import pgw2023 from '../../assets/tournamentsImg/PGW-MASTER-EVENT+-SMALL.webp'
import versusxperience from '../../assets/tournamentsImg/versusxperience.webp'
import gamingrouen from '../../assets/tournamentsImg/gamingrouen.webp'

import Spinner from '../spinner/Spinner.vue';
import Card from '../card/Card.vue';
import { ref, watch, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import {CARD_QUERY} from "../../queries/queries"
import albums from "../../queries/data.json"

let keyy = 1
const json = ref([
    {
        id: 989730,
        link: "IBMqzvKFgcA"
    },
    {
        id: 989731,
        link: "PExRdbEQEh8"
    },
    {
        id: 989712,
        link: "O-nmUHFEI3Q"
    }
])

const jso = computed(() => json ?? [])
watch(jso, value => {console.log('users' + value)})
// console.log(json.value)

// const albumms = computed(() => albums ?? [])
// watch(albumms, value => {console.log('users' + value)})

const { result, loading, error } = useQuery(CARD_QUERY)

const isCollapsed = ref(false)
const toggleState = (toggleValue: boolean) => {
    isCollapsed.value = toggleValue;
  };
let bool = false
const users = computed(() => result.value?.league.events.nodes ?? [])

function cardVideos(indexx:number) {
    let alb:any;
    albums.map((album) => {
        if(album.idCard === indexx) {
            // alb = `${import.meta.env.VITE_ALBUM_LINK}${album.link}`
            console.log(`https://www.youtube.com/watch?v=${album.link}`)
            alb = `https://www.youtube.com/watch?v=${album.link}`
        }
    })
    return alb
}

function cardImages(id: string, venueAddress: string, image1: string, image2: string) {
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
    } else if (id == "994339") {
        return gamingrouen
    } else if (id == "1064403") {
        return versusxperience
    } else {
        if (venueAddress) {
            return image1;
        } else {
            return image2;
        }
    }
}

// function cardVideos(id: string) {
//     if (id == '989730') {
//             return 'https://www.youtube.com/watch?v=IBMqzvKFgcA'
//     } else if (id == '989731') {
//         return 'https://www.youtube.com/watch?v=O-nmUHFEI3Q'
//     } else if (id == '989734') {
//         return 'https://www.youtube.com/watch?v=FXbMa4sgUxA'
//     } else if (id == '989712') {
//         return 'https://www.youtube.com/watch?v=zYuUtdqQii8'
//     } else if (id == "1005230") {
//         return 'https://www.youtube.com/watch?v=fpWr08ZcIQA'
//     }
// }

// watch(users, value => {
//     value.map((x: any) => console.log(x.isOnline))
// })
// watch(users, value => {console.log('users' + value)})
</script>
<style lang="scss">
@import "./style.scss";
</style>
