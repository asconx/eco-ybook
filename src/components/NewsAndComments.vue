<template>
  <div class="wrapper q-py-lg q-my-lg">
    <q-icon name="ti-comments" size="lg"/>
    <h6 class="text-h6 font-bold q-my-md">Aktualności i komentarze </h6>
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
</template>
<style lang="sass" scoped>


</style>
