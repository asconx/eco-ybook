<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <div class="wrapper">
        <q-skeleton v-if="loading" height="500px" square style="border-radius: 20px" />
        <div v-else class="photos-container">
          <q-img
            v-for="photo in profileData.photos"
            :key="photo.id"
            :src="`${baseUrl}${photo.path}`"
            class="photo-item"
            :ratio="16/9" 
          />
        </div>
        <!-- Button to open gallery -->
        <q-btn
          v-if="profileData.photos.length > 0"
          label="Show All Photos"
          color="primary"
          @click="openGallery"
          class="show-all-photos-btn"
        />
      </div>
    </q-page-container>
    <!-- Gallery Dialog -->
    <q-dialog v-model="isGalleryOpen">
      <q-card class="bg-black text-white">
        <q-card-section>
          <div class="gallery-container">
            <q-img
              v-for="photo in profileData.photos"
              :key="photo.id"
              :src="`${baseUrl}${photo.path}`"
              class="gallery-item"
              :ratio="16/9"
            />
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Close" @click="isGalleryOpen = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="row wrapper justify-between q-pt-md">
      <div class="col-7">
        <DetailsMainDescription :profile="profileData" />
        <q-separator class="q-my-xl" />
        <HostDetails />
        <q-separator class="q-my-xl" />
        <DetailsAmenities />
        <q-separator class="q-my-xl" />
        <DetailsLocation :profile="profileData" />
        <PlaceRating />
      </div>
      <div class="col-4">
        <SummaryBox />
      </div>
    </div>
    <PlaceRules />
    <section class="main-background q-py-lg">
      <div class="wrapper q-py-lg">
        <TermsList :profile="profileData" />
      </div>
    </section>
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HeaderComponent from "components/HeaderComponent.vue";
import TermsList from "components/TermsList.vue";
import FooterComponent from "components/FooterComponent.vue";
import { useRoute } from "vue-router";
import { propertyService } from "src/services/PropertyService";
import { baseUrl } from "src/utils/baseUrl";

import SummaryBox from "components/SummaryBox.vue";
import DetailsMainDescription from "components/DetailsMainDescription.vue";
import HostDetails from "components/HostDetails.vue";
import DetailsAmenities from "components/DetailsAmenities.vue";
import DetailsLocation from "components/DetailsLocation.vue";
import PlaceRules from "components/PlaceRules.vue";
import PlaceRating from "components/PlaceRating.vue";

const profileData = ref<any>({});
const route = useRoute();
const profileId = ref<string>(route.params.offerId as string || "");
const loading = ref(true);
const isGalleryOpen = ref(false);  // Do zarządzania otwarciem galerii

propertyService.getProfile(parseInt(profileId.value, 10)).then((data) => {
  profileData.value = data;
  loading.value = false;
});

// Otwiera galerię zdjęć
const openGallery = () => {
  isGalleryOpen.value = true;
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap')

.q-toolbar
  align-items: flex-start !important

.photos-container
  display: flex
  flex-wrap: wrap
  gap: 10px 

.photo-item
  width: calc(33.333% - 10px) 
  height: 500px 
  object-fit: cover 
  border-radius: 10px

.show-all-photos-btn
  margin-top: 20px

.gallery-container
  display: flex
  flex-wrap: wrap
  gap: 10px

  .gallery-item 
    width: calc(33.333% - 10px)
    height: 400px
    width: 500px
    object-fit: cover
    border-radius: 10px
  
    
  
  
</style>
