<script setup lang="ts">
import SectionFourth from '@/components/sectionFourth/SectionFourth.vue';
import TheWelcome from '../components/TheWelcome.vue'
import SectionFirst from '../components/sectionFirst/SectionFirst.vue'
import SectionSecond from '../components/sectionSecond/SectionSecond.vue'
import SectionThird from '../components/sectionThird/SectionThird.vue'
import SectionThirdBis from '../components/sectionThirdBis/SectionThirdBis.vue'
import WhiteBar from '../components/whiteBar/WhiteBar.vue'
import Modal from '../components/modal/Modal.vue'

import { ref } from 'vue'

// import useWindowDimensions from "./utils/useWindowDimensions";


// const { width } = useWindowDimensions();
// 	const widthVideo: number = width - 320
// 	const heightVideo: number = widthVideo * (9/16)

const isModal = ref(false)
const toggleModal = (toggleValue: boolean) => {
    isModal.value = toggleValue;
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <SectionFirst @toggle-modal="toggleModal(true)"/>
    <WhiteBar />
    <SectionSecond />
    <SectionThird />
    <SectionThirdBis />
    <SectionFourth />
    <template v-if="isModal === true">
      <Modal @toggle-modal="toggleModal(false)">
        <iframe width={widthVideo} height={heightVideo} src="https://www.youtube.com/embed/6mFKuKw4hKA?si=RkylAhCb2E9aDK3V" 
            title="Championnat de France de Mortal Kombat - Trailer" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
      </Modal>
    </template>
    <!-- <h1>odjfhudsjkdjfkdshddjhsjkj</h1> -->
  </main>
</template>
