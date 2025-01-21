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
  <div>
    <h1>Oferty</h1>
    <q-btn label="Set Cookie" color="primary" @click="setUserToken" />
    <q-btn label="Get Cookie" color="secondary" @click="readUserToken" />
    <q-btn label="Remove Cookie" color="negative" @click="deleteUserToken" />
  </div>
</template>

<script lang="ts" setup>
import MainSearch from "components/MainSearch.vue";
import OffersList from "components/OffersList.vue";
import HeaderComponent from "components/HeaderComponent.vue";
import FooterComponent from "components/FooterComponent.vue";

import { setCookie, getCookie, removeCookie } from 'services/cookiesService';

// Funkcje zarządzające ciasteczkami
const setUserToken = () => {
  setCookie('userToken', 'abc123');
};

const readUserToken = () => {
  const token = getCookie('userToken');
  console.log('Odczytany token:', token);
};

const deleteUserToken = () => {
  removeCookie('userToken');
};
</script>
