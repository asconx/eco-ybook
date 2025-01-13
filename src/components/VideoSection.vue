<template>
  <q-parallax :height="950">
    <template v-slot:media>
      <video width="1920" height="1000" poster="../assets/las.jpg" autoplay loop muted>
        <source type="video/mp4" src="../assets/video.mp4">
      </video>
    </template>
    <h3 class="text-white text-center">Pomagamy odciąć się od codzienności.</h3>
  </q-parallax>

  <div class="row" style="width: 100%">
    <div class="col-3">
      <q-img src="../assets/jedzenie.jpg" fit="cover" class="image-container">
        <div class="absolute-full text-subtitle2 flex flex-center">
          <h4>Jedzenie</h4>
        </div>
      </q-img>
    </div>
    <div class="col-3">
      <q-img src="../assets/noclegi.jpg" fit="cover" class="image-container">
        <div class="absolute-full text-subtitle2 flex flex-center">
          <h4>Noclegi</h4>
        </div>
      </q-img>
    </div>
    <div class="col-3">
      <q-img src="../assets/atrakcje.jpg" fit="cover" class="image-container">
        <div class="absolute-full text-subtitle2 flex flex-center">
          <h4>Atrakcje</h4>
        </div>
      </q-img>
    </div>
    <div class="col-3">
      <q-img src="../assets/uroczystosci.jpg" fit="cover" class="image-container">
        <div class="absolute-full text-subtitle2 flex flex-center">
          <h4>Uroczystości</h4>
        </div>
      </q-img>
    </div>
  </div>
</template>
<style lang="sass" scoped>

.image-container
  height: 800px
  width: 100%
  overflow: hidden

</style>
