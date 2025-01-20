<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <div class="container">
        <h1>Lokalne atrakcje</h1>
        <p class="subtitle">Lokalne atrakcje: {{ attractions.length }}</p>
        <div class="grid">
          <div v-for="attraction in attractions" :key="attraction.title" class="card">
            <q-img :src="attraction.image" :alt="attraction.title" />
            <div class="card-content">
              <p class="location">{{ attraction.location }}</p>
              <h2>{{ attraction.title }}</h2>
              <p>{{ attraction.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import FooterComponent from "components/FooterComponent.vue";
import HeaderComponent from "components/HeaderComponent.vue";
import { ref } from 'vue';

const attractions = ref([
  {
    title: 'Zamek Neuschwanstein',
    description: 'Położony w Bawarii, zamek zainspirował Walta Disneya do stworzenia zamku Śpiącej Królewny.',
    location: 'NIEMCY, BAWARIA',
    image: "../assets/zamek.png"
  },
  {
    title: 'Brama Brandenburska',
    description: 'Jedna z najsłynniejszych atrakcji Berlina, symbolizująca zjednoczenie Niemiec.',
    location: 'NIEMCY, BERLIN',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Brandenburger_Tor_abends.jpg'
  },
  {
    title: 'Muzeum Vasa',
    description: 'Muzeum w Sztokholmie, prezentujące XVII-wieczny okręt wojenny.',
    location: 'SZWECJA, SZTOKHOLM',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Vasa_ship_model.jpg'
  },
  {
    title: 'Gamla Stan',
    description: 'Urokliwa starówka w Sztokholmie z wąskimi uliczkami i historycznymi budynkami.',
    location: 'SZWECJA, SZTOKHOLM',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Gamla_Stan_stockholm.jpg'
  },
  {
    title: 'Fiord Geiranger',
    description: 'Jeden z najpiękniejszych norweskich fiordów, wpisany na listę UNESCO.',
    location: 'NORWEGIA, GEIRANGER',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Geirangerfjord.jpg'
  },
  {
    title: 'Trolltunga',
    description: 'Spektakularna formacja skalna, popularna wśród turystów i miłośników przyrody.',
    location: 'NORWEGIA, ODDa',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Trolltunga_Norway.jpg'
  },
  {
    title: 'Klify Moheru',
    description: 'Spektakularne klify wznoszące się nad Oceanem Atlantyckim.',
    location: 'IRLANDIA, HRABSTWO CLARE',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cliffs_of_Moher%2C_County_Clare%2C_Ireland.jpg'
  },
  {
    title: 'Guinness Storehouse',
    description: 'Muzeum poświęcone historii piwa Guinness, z tarasem widokowym na Dublin.',
    location: 'IRLANDIA, DUBLIN',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Guinness_Storehouse.jpg'
  }
]);
</script>

<style lang="sass" scoped>
.container
  max-width: 1200px
  margin: 0 auto

.subtitle
  font-size: 1rem
  color: gray

.grid
  display: flex
  flex-wrap: wrap
  gap: 20px

.card
  background: #fff
  box-shadow: 0 4px 8px rgba(0,0,0,0.1)
  border-radius: 8px
  overflow: hidden
  width: calc(50% - 20px)

img
  width: 100%
  height: 200px
  object-fit: cover

.card-content
  padding: 15px

.location
  font-weight: bold
  color: #777
</style>
