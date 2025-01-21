<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <div class="container">
        <h1>Lokalne atrakcje</h1>
        <p class="subtitle">Lokalne atrakcje: {{ attractions.length }}</p>
        <div class="grid">
          <div 
            v-for="attraction in attractions" 
            :key="attraction.title" 
            class="card"
            @click="openModal(attraction)"
          >
            <q-img 
              :src="attraction.image" 
              :alt="attraction.title" 
              class="clickable-image"
            />
            <div class="card-content">
              <!-- Wyświetlamy lokalizację pogrubioną -->
              <p class="location"><strong>{{ attraction.location }}</strong></p> 
              <!-- Pogrubiona nazwa atrakcji -->
              <h2><strong>{{ attraction.title }}</strong></h2>
              <p>{{ attraction.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
    
    <!-- Modal -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <q-img :src="selectedAttraction.image" :alt="selectedAttraction.title" />
        <h2><strong>{{ selectedAttraction.title }}</strong></h2>
        <p class="location"><strong>{{ selectedAttraction.location }}</strong></p>
        <!-- Wyświetlamy details pogrubione -->
        <p><strong>{{ selectedAttraction.details }}</strong></p>
        <button @click="isModalOpen = false">Zamknij</button>
      </div>
    </div>
    
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
    image: new URL('../assets/zamek.png', import.meta.url).href,
    details: 'Zamek Neuschwanstein został wybudowany w XIX wieku przez króla Ludwika II Bawarskiego. Jest jedną z najbardziej rozpoznawalnych atrakcji turystycznych w Niemczech, przyciągając miliony turystów rocznie.'
  },
  {
    title: 'Brama Brandenburska',
    description: 'Jedna z najsłynniejszych atrakcji Berlina, symbolizująca zjednoczenie Niemiec.',
    location: 'NIEMCY, BERLIN',
    image: new URL('../assets/brama_brandenburska.jpg', import.meta.url).href,
    details: 'Brama Brandenburska to XVIII-wieczny neoklasycystyczny pomnik znajdujący się w centrum Berlina. Stanowi symbol pokoju i jedności Niemiec.'
  },
  {
    title: 'Muzeum Vasa',
    description: 'Muzeum w Sztokholmie, prezentujące XVII-wieczny okręt wojenny.',
    location: 'SZWECJA, SZTOKHOLM',
    image: new URL('../assets/muzeum_vasa.jpg', import.meta.url).href,
    details: 'Muzeum Vasa w Sztokholmie mieści jedyny na świecie prawie kompletnie zachowany XVII-wieczny okręt wojenny, który zatonął w 1628 roku i został wydobyty w 1961 roku.'
  },
  {
    title: 'Gamla Stan',
    description: 'Urokliwa starówka w Sztokholmie z wąskimi uliczkami i historycznymi budynkami.',
    location: 'SZWECJA, SZTOKHOLM',
    image: new URL('../assets/gamla_stan.jpg', import.meta.url).href,
    details: 'Gamla Stan to historyczne centrum Sztokholmu, pełne średniowiecznych zabytków, brukowanych uliczek i malowniczych kamienic z XVII wieku.'
  },
  {
    title: 'Fiord Geiranger',
    description: 'Jeden z najpiękniejszych norweskich fiordów, wpisany na listę UNESCO.',
    location: 'NORWEGIA, GEIRANGER',
    image: new URL('../assets/fiord_geiranger.jpg', import.meta.url).href,
    details: 'Fiord Geiranger to jeden z najbardziej spektakularnych norweskich fiordów, z wodospadami i malowniczymi krajobrazami. Znajduje się na liście światowego dziedzictwa UNESCO.'
  },
  {
    title: 'Trolltunga',
    description: 'Spektakularna formacja skalna, popularna wśród turystów i miłośników przyrody.',
    location: 'NORWEGIA, ODDA',
    image: new URL('../assets/fiord_geirangerr.jpg', import.meta.url).href,
    details: 'Trolltunga, czyli Język Trolla, to charakterystyczna półka skalna wystająca nad przepaścią na wysokości 700 metrów nad jeziorem Ringedalsvatnet.'
  },
  {
    title: 'Klify Moheru',
    description: 'Spektakularne klify wznoszące się nad Oceanem Atlantyckim.',
    location: 'IRLANDIA, HRABSTWO CLARE',
    image: new URL('../assets/klify_moheru.jpg', import.meta.url).href,
    details: 'Klify Moheru wznoszą się na wysokość 214 metrów i rozciągają się na długość około 14 kilometrów wzdłuż wybrzeża Atlantyku.'
  },
  {
    title: 'Guinness Storehouse',
    description: 'Muzeum poświęcone historii piwa Guinness, z tarasem widokowym na Dublin.',
    location: 'IRLANDIA, DUBLIN',
    image: new URL('../assets/guinness_storehouse.jpg', import.meta.url).href,
    details: 'Guinness Storehouse to popularna atrakcja turystyczna w Dublinie, gdzie można poznać historię warzenia piwa Guinness i podziwiać panoramę miasta z Gravity Bar.'
  }
]);

const isModalOpen = ref(false);
const selectedAttraction = ref(null);

const openModal = (attraction) => {
  selectedAttraction.value = attraction;
  isModalOpen.value = true;
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.subtitle {
  font-size: 1rem;
  color: gray;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;
}
.q-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}
.card-content {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.location {
  font-weight: bold;
  color: #777;
  margin-bottom: 10px;
}
h2 {
  font-size: 1.5rem;
  margin: 0 0 10px;
}
p {
  font-size: 1rem;
  color: #333;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 10px;
  text-align: center;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

/* Efekt powiększenia dla każdego obrazka */
.clickable-image {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.clickable-image:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
</style>
