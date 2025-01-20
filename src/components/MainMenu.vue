<template>
  <q-btn stretch flat label="Nocuj" color="grey-7">
    <q-menu class="no-shadow">
      <q-list style="min-width: 100px">
        <q-item to="/offers" clickable v-close-popup>
          <q-item-section>Wszystkie noclegi</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Last minute</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Mapa</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
  <q-btn stretch flat label="Doświadczaj" color="grey-7">
    <q-menu class="no-shadow">
      <q-list style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>Jedzenie</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Atrakcje</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Miejsca eventowe</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Pomysły na podróże</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
  <q-btn stretch flat label="Poznaj nas" color="grey-7">
    <q-menu class="no-shadow">
      <q-list style="min-width: 100px">
        <q-item to="about-us" clickable v-close-popup>
          <q-item-section>O Nas</q-item-section>
        </q-item>
        <q-item to="/travel-voucher" clickable v-close-popup>
          <q-item-section>Vouchery prezentowe</q-item-section>
        </q-item>
        <q-item to="/initiative-for-conscious-tourism" clickable v-close-popup>
          <q-item-section>Świadome podróżowanie</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
  <a href="https://panel.ybook.pl/register">
    <q-btn rounded unelevated label="Dodaj ofertę" color="primary" class="q-mx-md"/>
  </a>
</template>


