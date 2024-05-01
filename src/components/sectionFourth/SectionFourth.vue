<template>
    <section id="tournaments" className="black-section">
        <div className="container relative-content">
            <h2 className="text-center">Tournois</h2>
            <div className='subtitles'>
                <h3 class="subtitle" @click="toggleState(true)" :class="isCollapsed === true && 'activeLang' ">Résultats finaux</h3>
                <h3 class="subtitle" @click="toggleState(false)" :class="isCollapsed === false && 'activeLang' ">Tournois</h3>
            </div>

            <div v-if="isCollapsed === true">
                <div class="results">
                    <div class="section champ">
                        <div class="player champ">
                            <p className='playerRank'>1er</p>
                            <img :src="akstar">
                            <p class="playerName">Akstar</p>
                        </div>
                        <div>
                            <p class="congrats">Félicitations à Akstar qui remporte le championnat de France de Mortal Kombat 1 !</p>
                            <p class="congrats">IL REMPORTE ÉGALEMENT UN VOYAGE POUR LE LAST CHANCE QUALIFIER DU PRO TOUR DE MORTAL KOMBAT 1 organisé par NetherRealm Studios !</p>
                            <img class='prokompetition' :src="mk1pro" />

                        </div>
                    </div>
                    <h2 class="text-center">Classement des finalistes</h2>
                    <div class="section">
                        <div class="player silver">
                            <p className='playerRank'>2ème</p>
                            <img :src="deftat" />
                            <p class="playerName">Deftat</p>
                        </div>
                        <div class="player bronze">
                            <p className='playerRank'>3ème</p>
                            <img :src="lechatnoir" />
                            <p class="playerName">Le Chat Noir</p>
                        </div>
                        <div class="player">
                            <p className='playerRank'>4ème</p>
                            <img :src="ganondeurf" />
                            <p class="playerName">Ganondeurf</p>
                        </div>
                    </div>

                    <div class="section">
                        <div class="player">
                            <p className='playerRank'>5ème</p>
                            <img :src="rza" />
                            <p class="playerName">RZA</p>
                        </div>
                        <div class="player">
                            <p className='playerRank'>5ème</p>
                            <img :src="lordrak" />
                            <p class="playerName">Lordrak</p>
                        </div>
                        <div class="player">
                            <p className='playerRank'>7ème</p>
                            <img :src="snow" />
                            <p class="playerName">Snow</p>
                        </div>

                        <div class="player">
                            <p className='playerRank'>7ème</p>
                            <img :src="baylight" />
                            <p class="playerName">Baylight</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <div v-if="loading"><Spinner/></div>
                <div v-else-if="error">{{ error.message }}</div>
                <div className="tournaments" v-else-if="users">
                    <div className="cards inline-itemList show-on-scroll is-visible" v-for="event of users" :key="event.id">
                        <Card
                        :title="event.name"
                        :linkPhotos="cardImages(event.id, event.tournament.venueAddress, event.tournament.images[0].url, event.tournament.images[1].url)"
                        :linkVideo="cardVideos(event.id)"
                        :link="`https://www.start.gg/${event.slug}`"
                        :numAttendees=event.numEntrants
                        :venueAddress="event.isOnline === true ? 'Online' : event.tournament.venueAddress"
                        :date="new Date(event.startAt * 1000).toLocaleDateString('fr')"
                        >
                        <ul>
                            <li  v-for="player of event.standings.nodes" :key="player.entrant.id">
                                {{player.entrant.name}}
                            </li>
                        </ul>
                        </Card>
                    </div>
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
import gamingrouen from '../../assets/tournamentsImg/gamingrouen.webp'

import akstar from '../../assets/players/akstar.webp'
import baylight from '../../assets/players/baylight.webp'
import deftat from '../../assets/players/deftat.webp'
import ganondeurf from '../../assets/players/ganondeurf.webp'
import lechatnoir from '../../assets/players/lechatnoir.webp'
import lordrak from '../../assets/players/lordrak.webp'
import rza from '../../assets/players/rza.webp'
import snow from '../../assets/players/snow.webp'

import mk1pro from '../../assets/mk1-pro-kompetition-2023-2024.webp'

import Spinner from '../spinner/Spinner.vue';
import Card from '../card/Card.vue';

import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import {CARD_QUERY} from "../../queries/queries"
import albums from "../../queries/data.json"

const { result, loading, error } = useQuery(CARD_QUERY)

/* GESTION DES ONGLETS */
const isCollapsed = ref(true)
const toggleState = (toggleValue: boolean) => {
    isCollapsed.value = toggleValue;
};

const users = computed(() => result.value?.league.events.nodes ?? [])

/* GESTION DES LIENS VIDEOS DES CARDS */
function cardVideos(indexx:number) {
    let alb
    albums.map((album) => {
        if(album.idCard === indexx) {
            // alb = `${import.meta.env.VITE_ALBUM_LINK}${album.link}`
            console.log(`https://www.youtube.com/watch?v=${album.link}`)
            alb = `https://www.youtube.com/watch?v=${album.link}`
        }
    })
    return alb
}

/* GESTION DES IMAGES DES CARDS */
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
</script>
<style lang="scss">
@import "./style.scss";
</style>
