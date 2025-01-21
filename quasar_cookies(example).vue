<script lang="ts" setup>
import { useQuasar } from 'quasar';

// Pobranie instancji Quasar
const $q = useQuasar();

// Zapis ciasteczka
const setCookie = () => {
  $q.cookies.set('userToken', 'abc123', {
    expires: 7, // Czas wygaśnięcia w dniach
    path: '/',  // Ścieżka
    secure: true // HTTPS (zalecane w środowisku produkcyjnym)
  });
};

// Odczyt ciasteczka
const getCookie = () => {
  const token = $q.cookies.get('userToken');
  console.log('Token:', token);
};

// Usunięcie ciasteczka
const removeCookie = () => {
  $q.cookies.remove('userToken');
};
</script>

<template>
  <div>
    <button @click="setCookie">Set Cookie</button>
    <button @click="getCookie">Get Cookie</button>
    <button @click="removeCookie">Remove Cookie</button>
  </div>
</template>
