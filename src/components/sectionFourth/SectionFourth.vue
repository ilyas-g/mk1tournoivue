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
            <div v-if="loading"><Spinner/></div>
            <div v-else-if="error">{{ error.message }}</div>
            <ul v-else-if="users">
                <li v-for="user of users" :key="user.id">
                {{ user.name }} - {{ user.slug }}
                </li>
            </ul>
        </div>
    </section>
</template>
<script lang="ts">
import Spinner from '../spinner/Spinner.vue';
import Card from '../card/Card.vue';
import { watch, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import {CARD_QUERY} from "../../queries/queries"
// import * as albums from "../../queries/data.json"


export default {
    setup () {
        const { result, loading, error } = useQuery(gql`
query LeagueStandings {
  league(slug: "championnat-de-france-mortal-kombat-1-classement") {
    id
    name
    videogames {
      id
      name
    }
    events (query: {
      perPage: 16
    }) {
      nodes {
        id
        name
        slug
        startAt
        isOnline
        images {
          id
          url
        }
        numEntrants
        tournament {
          id
          name
          slug
          numAttendees
          venueAddress
          startAt
          state
          images {
            id
            url
          }
        }
        standings (query: {
          page: 1
          perPage: 8
        }) {
          nodes {
            id
            entrant {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `)

// watch(result, value => {
//       console.log(value.league.events.nodes)
//     })

const users = computed(() => result.value?.league.events.nodes ?? [])
    return {
        users,
        loading,
        error
    }
  },
}
</script>
<style lang="scss">
@import "./style.scss";
</style>
