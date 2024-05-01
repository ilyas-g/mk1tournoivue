<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import Classement from './components/classement/Classement.vue'
import Contact from './components/contactBlock/ContactBlock.vue'
import Modal from './components/modal/Modal.vue'

import { ref, computed } from 'vue'

import {STANDING_QUERY} from "./queries/queries"
import { useQuery } from '@vue/apollo-composable'

import useDimension from './utils/useDimension.js'

const isClassement = ref(false)
const toggleClassement = (toggleValue: boolean) => {
    isClassement.value = toggleValue;

    if(isClassement.value === true) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
};

const isContact = ref(false);
const toggleContact = (toggleValue: boolean) => {
  isContact.value = toggleValue;
};


// Destructuring assignment - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
const {width} = useDimension()

const isModal = ref(false)
const toggleModal = (toggleValue: boolean) => {
    isModal.value = toggleValue;

    if(isModal.value === true) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
};

const { result, loading, error } = useQuery(STANDING_QUERY)
const participants = computed(() => result.value?.league.standings.nodes ?? [])
</script>

<template>
  <Header 
  @toggle-contact="toggleContact(true)" 
  @toggle-classement="toggleClassement(true)" 
  @toggle-modal="toggleModal(true)" />

  <RouterView />
  
  <Footer @toggle-contact="toggleContact(true)" @toggle-classement="toggleClassement(true)" />
  <template v-if="isContact === true">
    <Contact mail="flashno47@gmail.com" @toggle-contact="toggleContact(false)" />
  </template>


  <template v-if="isClassement === true">
    <div v-if="loading"><Spinner/></div>
    <div v-else-if="error">{{ error.message }}</div>
    <Classement v-else @toggle-classement="toggleClassement(false)">
			<div className="responsive-table-line mb-5">
				<table :border="1" cellPadding="1" cellSpacing="1" className="table table-body-center table-bordered table-condensed">
					<thead>
						<tr>
							<th><span>Rang</span></th>
							<th><span>Joueur</span></th>
							<th><span>Points</span></th>
						</tr>
					</thead>
					<tbody v-for="participant of participants">

								<tr>
									<td><span>{{participant.placement}}</span></td>
									<td><span>{{participant.entrant.name}}</span></td>
									<td><span>{{participant.totalPoints}}</span></td>
								</tr>
					</tbody>
				</table>
			</div>
    </Classement>
  </template>


  <template v-if="isModal === true">
      <Modal @toggle-modal="toggleModal(false)">
        <iframe :width="width - 320" :height="(width - 320) / (16/9)" src="https://www.youtube.com/embed/6mFKuKw4hKA?si=RkylAhCb2E9aDK3V" 
            title="Championnat de France de Mortal Kombat - Trailer" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
      </Modal>
    </template>
</template>

<style lang="scss">
@import './App.css';
@import './_section.scss';
</style>
