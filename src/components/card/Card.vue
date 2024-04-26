<template>
      <div class="cards__single" :class="[isActive === true ? 'flip' : '']">
        <div class="cards__front">
          <div class="cards__front__header">
            <div class="image">
              <img class="cards__image" :src=linkPhotos :alt=title />
            </div>
            <div class="cover">
              <h3 class="text">{{title}}</h3>
            </div>
          </div>
          <div class="cards__front__body">
            <div class="detail">
              <div class="title">
                <span class="icon-calendar-solid"></span> Date</div>
              <div class="desc">{{date}}</div>
            </div>

            <div class="detail">
              <div class="title">
                <span class="icon-location-dot-solid"></span> Localisation
              </div>
              <div class="desc">{{venueAddress}}</div>
            </div>

            <div class="detail">
              <div class="title">
                <span class="icon-user-solid"></span> Participants
              </div>
              <div class="desc">{{numAttendees}}</div>
            </div>
          </div>
          <div class="cards__front__footer">
            <button class="btn waves-effect waves-light" @click="toggleActive(true)">Résultats</button>
            <a :href=link target="_blank" class="btn waves-effect waves-light">Bracket</a>
            <template v-if="linkVideo !== undefined">
              <a :href=linkVideo target="_blank" class="btn waves-effect waves-light">Vidéo</a>
            </template>
          </div>
        </div>

        <div class="cards__back">
          <h3>TOP 8</h3>
          <slot>
          </slot>

          <div class="cards__front__footer">
            <button class="btn waves-effect waves-light mt-4" @click="toggleActive(false)">Retour</button>
          </div>
        </div>
      </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
defineProps<{
    link?: string | undefined
    linkPhotos?: string,
    linkVideo?: string,
    title: string,
    numAttendees: number,
    venueAddress: any,
    date: any,
}>()

const isActive = ref(false)
const toggleActive = (toggleValue: boolean) => {
    isActive.value = toggleValue;
};
</script>
<style lang="scss">
@import "./style.scss";
</style>
