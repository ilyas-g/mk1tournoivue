<script setup lang="ts">
import SectionFourth from '@/components/sectionFourth/SectionFourth.vue';
import SectionFirst from '../components/sectionFirst/SectionFirst.vue'
import SectionSecond from '../components/sectionSecond/SectionSecond.vue'
import SectionThird from '../components/sectionThird/SectionThird.vue'
import SectionThirdBis from '../components/sectionThirdBis/SectionThirdBis.vue'
import WhiteBar from '../components/whiteBar/WhiteBar.vue'
import Modal from '../components/modal/Modal.vue'

import { ref } from 'vue'

import useDimension from '../utils/useDimension.js'

// Destructuring assignment - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
const {width} = useDimension()

const isModal = ref(false)
const toggleModal = (toggleValue: boolean) => {
    isModal.value = toggleValue;
};
</script>

<template>
  <main>
    <SectionFirst @toggle-modal="toggleModal(true)"/>
    <WhiteBar />
    <SectionSecond />
    <SectionThird />
    <SectionThirdBis />
    <SectionFourth />
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
  </main>
</template>
