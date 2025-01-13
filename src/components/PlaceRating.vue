<template>
  <div class="q-py-md">
    <div class="q-mb-md">
      <h5 class="text-h5 text-bold q-my-md">Opinie - Into The LAS</h5>
      <div class="flex row items-center q-mt-sm">
        <q-icon class="text-yellow-8" name="star" size="md" />
        <span class="q-ml-sm text-subtitle2">5.0</span>
        <span class="q-ml-sm text-body2">· Liczba opinii: 141</span>
      </div>
    </div>

    <q-btn
      class="q-my-lg"
      color="primary"
      label="Zobacz wszystkie opinie (141)"
      rounded
      unelevated
    />

    <q-carousel
      v-model="recommendationSlide"
      animated
      class="rounded-borders"
      control-color="primary"
      infinite
      navigation
      navigation-position="bottom"
      swipeable
    >
      <q-carousel-slide name="style">
        <q-card bordered class="q-pa-md" flat>
          <div class="flex row items-center q-mb-sm">
            <q-icon class="text-grey-8" name="account_circle" size="md" />
            <div class="q-ml-sm">
              <h4 class="text-subtitle2">Agnieszka</h4>
              <div class="flex row items-center">
                <q-icon class="text-yellow-8" name="star" size="16px" />
                <span class="text-body2 q-ml-sm">5 · 26 lis 2024</span>
              </div>
            </div>
          </div>
          <p class="text-body2">
            Cudowne miejsce, bezgraniczny spokój, cisza. Gorąco polecam, a jako
            mama trójki dzieci bardzooooo cieszę się, że nie można ich tam
            zabierać. ODPOCZĘŁAM, pierwszy raz od 10 lat! Świetni gospodarze,
            a kuchnia Pani Beaty bajka, przywołuje wspomnienia o dzieciństwie
            i pysznych obiadach mojej babci. Gorąco polecam!
          </p>
        </q-card>
      </q-carousel-slide>
      <q-carousel-slide name="two">
        <q-card class="q-pa-md">
          <div class="flex row items-center q-mb-sm">
            <q-avatar size="40px">
              <img
                alt="Zdjęcie użytkownika"
                src="../assets/madry-ganek.jpg"
              />
            </q-avatar>
            <div class="q-ml-sm">
              <h4 class="text-subtitle2">Karolina</h4>
              <div class="flex row items-center">
                <q-icon class="text-yellow-8" name="star" size="16px" />
                <span class="text-body2 q-ml-sm">5 · 4 lis 2024</span>
              </div>
            </div>
          </div>
          <p class="text-body2">
            Nasz pierwszy raz na Podlasiu i na pewno nie ostatni. A to w dużej
            mierze zasługa "Into The Las"! Wypoczęliśmy jak nigdy, mimo że
            codziennie eksplorowaliśmy okolicę i trochę kilometrów
            nabiliśmy...
          </p>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const recommendationSlide = ref("two");
</script>


<style lang="sass" scoped>


</style>
