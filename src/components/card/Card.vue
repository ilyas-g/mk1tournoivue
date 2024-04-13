<template>
      <!-- <div class={`cards__single ${active === true ? 'flip' : ''}`}> -->
      <div class="cards__single">
        <div class="cards__front">
          <div class="cards__front__header">
            <!-- <div class="image">
              <img class="cards__image" :src=linkPhotos :alt=title />
            </div> -->
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
                <span class="icon-location-dot-solid"></span> {t('location')}
              </div>
              <div class="desc">{{venueAddress}}</div>
            </div>

            <div class="detail">
              <div class="title">
                <span class="icon-user-solid"></span> {t('attendees')}
              </div>
              <div class="desc">{{numAttendees}}</div>
            </div>
          </div>
          <!-- <div class="cards__front__footer">
            {children ? <button class="btn waves-effect waves-light" onClick={() => setActive(true)}>Résultats</button> : ''}
            <a :href=link target="_blank" class="btn waves-effect waves-light">Bracket</a>
            {linkVideo !== undefined && <a href={`${linkVideo}`} target="_blank" class="btn waves-effect waves-light">Vidéo</a>}
          </div> -->
        </div>

        <div class="cards__back">
          <h3>TOP 8</h3>
          <slot>{children}</slot>
          <!-- <div class="cards__front__footer">
            <button class="btn waves-effect waves-light mt-4" onClick={() => setActive(false)}>Retour</button>
          </div> -->
        </div>
      </div>
</template>
<script lang="ts" setup>

// interface Props {
//   link?: string | undefined
//   linkPhotos?: string
//   linkVideo?: string
//   title: string
//   children?: JSX.Element
//   numAttendees: number
//   venueAddress: string
//   date: any
// }
defineProps<{
    // link?: string | undefined
    // linkPhotos?: string,
    // linkVideo?: string,
    title: String,
    numAttendees: number,
    venueAddress: String,
    date: any,
}>()

</script>
<style lang="scss">
@import "./style.scss";
</style>
