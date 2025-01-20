<template>
  <router-view :key="$route.path" />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import Emitter from 'tiny-emitter/instance';

const $q = useQuasar();

Emitter.on('server-error', (msg: string) => {
  $q.notify({
    type: 'negative',
    message: msg,
  });
});

Emitter.on('server-success', (msg: string) => {
  $q.notify({
    type: 'positive',
    message: msg,
  });
});
</script>
<style lang="sass">
@import url('assets/fonts/fonts.css')

body
  font-family: 'DM Sans', sans-serif

a
  color: #000
  text-decoration: none

.wrapper
  max-width: 1300px
  margin: 0px auto
  padding: 20px

.highlight-item
  background-color: #f6e5dc
  border-radius: 5px
  padding: 3px 5px
  text-align: center
  font-weight: bold
  color: #000
  font-size: 14px

.main-background
  background-color: #faf9f5

.lagoon-background
  background-color: #F0F5F7

.apricot-background
  background-color: #f3ece8

.text-apricot
  color: #f3ece8

.almond-background
  background-color: #F1EEE3

.q-btn__content
  font-family: 'DM Sans', sans-serif
  text-transform: none
  font-weight: 400
  font-size: 16px

.q-tab__label
  text-transform: lowercase

.stat-description
  font-size: 1rem
  color: #555
  margin-top: 10px

.q-carousel .q-carousel__thumbnail
  height: 150px !important
</style>
