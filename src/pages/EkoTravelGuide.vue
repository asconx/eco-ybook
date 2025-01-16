<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
     <h1>Hello world</h1>
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import FooterComponent from "components/FooterComponent.vue";
import HeaderComponent from "components/HeaderComponent.vue";</script>
<style lang="sass" scoped>
.text-subtitle1
  font-size: 1.1rem
</style>
