<template>
<div id="classement-container">
      <div class="classement-background">
        <div class="classementCard">
          <div class="relative-content">
            <h3>Classement du championnat de France <span class="close" @click="$emit('toggleClassement')">&times;</span></h3>
            <slot>dededededed</slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
@import "./style.scss";
</style>
