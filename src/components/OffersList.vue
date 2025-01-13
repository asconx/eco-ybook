<template>
  <q-tabs
    v-model="tab"
    active-color="primary"
    align="left"
    class="text-black q-mx-md q-mt-md"
  >
    <q-tab label="Wszystko" name="all" />
    <q-tab label="Pokoje" name="room" />
    <q-tab label="Campingi" name="camp" />
    <q-tab label="Domki" name="cottage" />
    <q-tab label="Apartamenty" name="apartment" />
  </q-tabs>
  <div class="lagoon-background flex justify-end items-center q-py-md q-px-lg">
    <q-chip v-model:selected="category.las" color="primary" text-color="white">
      W lesie
    </q-chip>
    <q-chip v-model:selected="category.sauna" color="teal" text-color="white">
      Sauny i balie
    </q-chip>
    <q-chip v-model:selected="category.zwierz" color="orange" text-color="white">
      Zwierzolubne
    </q-chip>
    <q-chip v-model:selected="category.sasiad" color="purple" text-color="white">
      Bez sąsiadów
    </q-chip>
    <q-chip v-model:selected="category.dziecko" color="blue" text-color="white">
      Dla dzieci
    </q-chip>
    <q-chip v-model:selected="category.basen" color="red" text-color="white">
      Basen
    </q-chip>
    <q-chip v-model:selected="category.ruina" color="green" text-color="white">
      Ruinersi
    </q-chip>
    <q-btn-dropdown
      color="deep-orange-10"
      label="Sortowanie wyników"
      rounded
      split
      unelevated
    >
      <q-list>
        <q-item v-close-popup clickable>
          <q-item-section>
            <q-item-label>Cena malejąco</q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-close-popup clickable>
          <q-item-section>
            <q-item-label>Cena rosnąco</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  <q-tab-panels v-model="tab" animated class="lagoon-background q-pb-xl">
    <q-tab-panel :name="tab" class="flex justify-around q-gutter-sm">
      <div v-if="loading" class="carusel">
        <q-skeleton height="380px" square />
        <h6 class="q-mt-sm q-mb-none">
          <q-skeleton type="text" />
        </h6>
        <q-skeleton type="QChip" />
        <p class="text-subtitle1 q-my-none">
          <q-skeleton type="text" />
        </p>
      </div>
      <template v-else>
        <div v-for="(profile, profileIndex) in filteredProfiles" v-bind:key="profile.id" class="carusel">
          <q-carousel v-model="carouselModels[profileIndex]" animated arrows class="img" height="380px" infinite
                      navigation
          >
            <template v-for="(photo, index) in profile.photos" v-bind:key="photo.id">
              <q-carousel-slide v-if="index < 4 && photo.path" :img-src="`${baseUrl}${photo.path}`"
                                :name="photo.id"
                                class="cursor-pointer" @click="$router.push(`/offers/${profile.id}`)" />
            </template>
          </q-carousel>
          <h6 class="q-mt-sm q-mb-none">{{ profile.name }}</h6>
          <q-chip class="q-mx-none">Cena od 600 zł /noc</q-chip>
          <p class="text-subtitle2 q-my-none">{{ profile.address }}</p>
        </div>
      </template>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { propertyService } from "src/services/PropertyService";
import { baseUrl } from "src/utils/baseUrl";

const tab = ref("all");
const profilesList = ref([]);
const filteredProfiles = ref([]);
const carouselModels = ref<any>([]);
const loading = ref(true);

const category = reactive({
  las: false,
  sauna: false,
  zwierz: false,
  sasiad: false,
  dziecko: false,
  basen: false,
  ruina: false,
})

const updateCarouselModels = (profiles: any) => {
  carouselModels.value = profiles.map((profile: any) => profile.photos?.[0]?.id || 0);
};

const filterProfiles = () => {
  if (tab.value === "all") {
    filteredProfiles.value = profilesList.value;
  } else {
    filteredProfiles.value = profilesList.value.filter((profile: any) => {
      switch (tab.value) {
        case "room":
          return profile.is_room_category;
        case "camp":
          return profile.is_camping_category;
        case "cottage":
          return profile.is_cottage_category;
        case "apartment":
          return profile.is_apartment_category;
        case "hotel":
          return profile.is_hotel_category;
        default:
          return true;
      }
    });
  }
  updateCarouselModels(filteredProfiles.value);
};

watch(() => tab.value, () => {
  filterProfiles();
}, { immediate: true });

const getPropertyData = () => {
  loading.value = true;
  propertyService.getProfiles().then((data) => {
    profilesList.value = data.items;
    carouselModels.value = profilesList.value.map((item: any) => item.photos?.[0]?.id || 0);
    filterProfiles();
    loading.value = false;
  });
};

getPropertyData();
</script>
<style lang="sass" scoped>
.carusel
  width: 22%

  .img
    border-radius: 10px

@media (max-width: 1250px)
  .carusel
    width: 30%

@media (max-width: 900px)
  .carusel
    width: 45%

@media (max-width: 630px)
  .carusel
    width: 100%
</style>


