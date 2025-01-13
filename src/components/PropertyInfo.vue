<template>
  <q-item class="q-mb-sm">
    <q-item-section avatar>
      <q-avatar size="100px">
        <img v-if="profile?.logo_path" :src="`${baseUrl}${profile?.logo_path}`">
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-h6">{{ profile.name }}</q-item-label>
      <q-item-label caption lines="1">{{ profile.address }}</q-item-label>
      <a v-if="profile?.website" :href="profile.website" class="text-subtitle1 text-primary">{{ profile.website }}</a>
    </q-item-section>
    <q-item-section side>
      <div class="row q-gutter-sm">
        <q-btn v-if="profile.url_instagram" :to="profile.url_instagram" outline round color="primary" icon="ti-instagram"/>
        <q-btn v-if="profile.url_facebook" :to="profile.url_facebook" outline round color="primary" icon="ti-facebook"/>
        <q-btn v-if="profile.url_youtube" :to="profile.url_youtube" outline round color="primary" icon="ti-youtube"/>
      </div>
    </q-item-section>
  </q-item>
  <div class="q-mb-md">
    <a v-if="profileData.phone" :href="`tel:${profileData.phone}`" target="_blank">
      <q-chip color="deep-orange-10" icon="phone" text-color="white">
        {{ profileData.phone }}
      </q-chip>
    </a>
    <a v-if="profileData.email" :href="`mailto:${profileData.email}`" target="_blank">
      <q-chip color="primary" icon="email" text-color="white">
        {{ profileData.email }}
      </q-chip>
    </a>
  </div>
</template>

<script lang="ts" setup>
import {baseUrl} from 'src/utils/baseUrl'
defineProps({profile: null})
</script>

