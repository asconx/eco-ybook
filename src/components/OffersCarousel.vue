<template>
  <section class="main-background">
    <div class="wrapper q-py-lg">
      <q-separator class="q-my-md"/>
      <h6 class="text-h6 font-bold q-mb-md">Najnowsze ofery</h6>
      <q-carousel
        arrows
        class="bg-transparent"
        control-type="dots"
        infinite
        navigation>

        <q-carousel-slide
          v-for="(offer, index) in offers"
          :key="index"
          :name="offer.name"
        >
          <div class="row items-center justify-center q-py-lg">
            <div class="col-12 col-md-4">
              <q-img
                :alt="offer.name"
                :src="offer.image"
                class="rounded-borders"

              />
            </div>
            <div class="col-12 col-md-8 q-ml-md">
              <h3 class="text-h6 font-bold">{{ offer.name }}</h3>
              <p class="text-caption">{{ offer.description }}</p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-separator class="q-my-md"/>
      <h6 class="text-h6 font-bold q-mb-md">Najbardziej popularne. Po prostu.</h6>
      <q-carousel
        arrows
        class="bg-transparent"
        control-type="dots"
        infinite
        navigation>

        <q-carousel-slide
          v-for="(offer, index) in offers"
          :key="index"
          :name="offer.name"
        >
          <div class="row items-center justify-center q-py-lg">
            <div class="col-12 col-md-4">
              <q-img
                :alt="offer.name"
                :src="offer.image"
                class="rounded-borders"

              />
            </div>
            <div class="col-12 col-md-8 q-ml-md">
              <h3 class="text-h6 font-bold">{{ offer.name }}</h3>
              <p class="text-caption">{{ offer.description }}</p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>
<script lang="ts" setup>
const offers = [
  {
    name: "Ceglany Domek",
    description:
      "Stary ceglany domek w Gryżynie, w sercu Gryżyńskiego Parku Krajobrazowego, wyremontowany z wielką miłością jaką mamy do starych domów, czeka na gości. Przyjeżdżajcie, zobaczcie jak tu dobrze.",
    image: "../assets/noclegi.jpg",
  },
  {
    name: "Jerzwałd 14",
    description:
      "Duży dom z pięcioma sypialniami, położony w pobliżu Jeziora Płaskiego. Miejsce 'must be' dla fanów książek o Panu Samochodziku - właśnie w Jerzwałdzie powstała część serii.",
    image: "../assets/noclegi.jpg",
  },
  {
    name: "Skrytka",
    description:
      "Raj dla estetów i spełnione marzenie chcących brać kąpiele z widokiem na las. W Skrytce skryjecie się we dwoje: to idealne miejsce na romantyczny wypad. Kosz powitalny w cenie.",
    image: "../assets/noclegi.jpg",
  },
  {
    name: "Pod Wysokim Niebem",
    description:
      "Meble z historią, obłędne widoki na Tatry, a za oknem las. Żywy skansen dla maks. 10-14 Gości w 100-letniej chacie w Beskidzie Wyspowym. Obok wieże widokowe, szlaki i narty.",
    image: "../assets/noclegi.jpg",
  },
]
</script>


<style lang="sass" scoped>


</style>
