<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="transparent">
      <q-toolbar class="q-pa-none">
        <router-link to="/" class="q-pl-lg q-py-md main-background"
                     style="border-bottom-right-radius: 80px; padding-right: 40px">
          <img src="./../assets/logo.svg" height="40"/>
        </router-link>
        <q-space/>
      </q-toolbar>
    </q-header>
    <q-page-container class="wrapper row q-my-md">
      <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
        <PropertyInfo :profile="profileData"/>
        <q-card-section class="row items-center no-wrap">
          <span>Przyjazd dnia <span class="text-weight-bold">12.03.2014</span> od</span>
          <q-chip outline color="primary" class="q-mx-sm">14:00</q-chip>
          <span>Wyjazd dnia <span class="text-weight-bold">18.03.2014</span> do</span>
          <q-chip outline color="primary" class="q-mx-sm">10:00</q-chip>
        </q-card-section>
        <q-separator/>
        <q-list class="q-ma-md">
          <h6 class="q-my-sm">Opcje dodatkowe</h6>
          <q-item class="q-my-md q-pa-md bg-grey-2 additionals-list-item">
            <q-item-section style="max-width: 150px">
              <q-item-label class="text-weight-medium">Pies</q-item-label>
              <q-item-label caption>Naliczanie dzienne
              </q-item-label>
            </q-item-section>
            <q-item-section class="items-end">
              <div class="people-section">
                <template>
                  <div class="column items-center q-mx-sm">
                    <span>Osoba</span>
                    <div class="flex items-center">
                      <q-btn
                        round
                        dense
                        outline
                        unelevated
                        color="mainColor"
                        size="sm"
                        icon="remove"
                      />
                      <div class="custom-number">4
                      </div>
                      <q-btn
                        round
                        dense
                        outline
                        unelevated
                        color="mainColor"
                        size="sm"
                        icon="add"
                      />
                    </div>
                  </div>
                </template>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list class="q-ma-md">
          <q-item class="q-my-md q-pa-md bg-grey-2 additionals-list-item">
            <q-item-section style="max-width: 150px">
              <q-item-label class="text-weight-medium">Obiady domowe</q-item-label>
              <q-item-label caption>Naliczanie dzienne
              </q-item-label>
            </q-item-section>
            <q-item-section class="items-end">
              <div class="people-section">
                <template>
                  <div class="column items-center q-mx-sm">
                    <span>Osoba</span>
                    <div class="flex items-center">
                      <q-btn
                        round
                        dense
                        outline
                        unelevated
                        color="mainColor"
                        size="sm"
                        icon="remove"
                      />
                      <div class="custom-number">4
                      </div>
                      <q-btn
                        round
                        dense
                        outline
                        unelevated
                        color="mainColor"
                        size="sm"
                        icon="add"
                      />
                    </div>
                  </div>
                </template>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="q-ma-sm">
          <h6 class="q-my-md q-mx-sm">Uzupełnij swoje dane</h6>
          <q-input filled square label="Imię i nazwisko" class="q-ma-sm"/>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-input filled square label="Telefon" class="q-ma-sm"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-input filled square label="Email" class="q-ma-sm"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 q-px-md">
        <q-card bordered flat class="q-my-md q-px-md text-body1">
          <h6 class="q-my-sm">Podsumowanie</h6>
          <q-carousel height="280px" animated v-model="slide1" arrows navigation infinite>
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"/>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"/>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"/>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"/>
          </q-carousel>
          <span class="text-overline">Pokój 3-osobowy na piętrze z łazienką</span>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import PropertyInfo from 'components/PropertyInfo.vue'
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import {propertyService} from 'src/services/PropertyService';

const slide1 = ref(1)
const profileData = ref<any>({})

const route = useRoute()
const profileId = ref<string>(route.params.offerId as string || '')
const loading = ref(true)

propertyService.getProfile(parseInt(profileId.value, 10)).then((data) => {
  profileData.value = data
  loading.value = false
})

</script>
<style lang="sass" scoped>

</style>
