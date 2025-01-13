<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container class="flex justify-center">
      <div class="q-my-lg-md q-pt-lg">
          <MainSearch />
      </div>
    </q-page-container>
    <div class="q-mt-md">
      <OffersList />
    </div>
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import MainSearch from "components/MainSearch.vue";
import OffersList from "components/OffersList.vue";
import HeaderComponent from "components/HeaderComponent.vue";
import FooterComponent from "components/FooterComponent.vue";</script>

