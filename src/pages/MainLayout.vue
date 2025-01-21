<template>
  <q-layout>
    <HeaderComponent/>
    <q-page-container class="flex justify-center">
      <q-parallax :height="700" src="../assets/las.jpg">
        <div class="absolute-full flex flex-center">
          <MainSearch/>
        </div>
      </q-parallax>
      <div class="wrapper">
        <div class="row items-center q-py-lg">
          <div class="col-4">
            <h3>Miejsca, które koją&nbsp;zmysły</h3>
          </div>
          <div class="col-4 text-body1">Kraje Norwegia, Szwecja, Niemcy, Irlandia
          </div>
          <div class="col-4 flex justify-end">
            <q-btn to="offers" class="q-mx-md" color="deep-orange-10" icon-right="ti-angle-right" label="Zobacz wszystkie miejsca"
                   rounded size="lg"
                   unelevated/>
          </div>
        </div>
        <MainOffers/>
      </div>
    </q-page-container>
    <StatsSection/>
    <VideoSection/>
    <HostsSection/>
    <CountriesSection/>
    <EcoSection/>
    <NewsAndComments/>
    <CategoriesList/>
    <OffersCarousel/>
    <FooterComponent/>
  </q-layout>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import MainSearch from 'components/MainSearch.vue'
import VideoSection from 'components/VideoSection.vue'
import MainOffers from 'components/MainOffers.vue';
import StatsSection from 'components/StatsSection.vue';
import CountriesSection from 'components/CountriesSection.vue';
import FooterComponent from 'components/FooterComponent.vue';
import OffersCarousel from 'components/OffersCarousel.vue';
import CategoriesList from 'components/CategoriesList.vue';
import EcoSection from 'components/EcoSection.vue';
import NewsAndComments from 'components/NewsAndComments.vue';
import HeaderComponent from "components/HeaderComponent.vue";
import HostsSection from "components/HostsSection.vue";

// Pobranie instancji Quasar
const $q = useQuasar();

// Zapis ciasteczka
const setCookie = () => {
  $q.cookies.set('userToken', 'abc123', {
    expires: 7, // Czas wygaśnięcia w dniach
    path: '/',  // Ścieżka
    secure: true // HTTPS (zalecane w środowisku produkcyjnym)
  });
};

// Odczyt ciasteczka
const getCookie = () => {
  const token = $q.cookies.get('userToken');
  console.log('Token:', token);
};

// Usunięcie ciasteczka
const removeCookie = () => {
  $q.cookies.remove('userToken');
};

</script>

