<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Polityka plików cookies</h1>
    <Card>
      <CardContent class="p-4 space-y-4">
        <p>
          Pliki cookies to małe pliki tekstowe zapisywane przez Twoją
          przeglądarkę na dysku komputera lub innego urządzenia. Pliki te
          przechowują informacje potrzebne do identyfikacji użytkownika lub
          zapamiętywania historii działań w Serwisach.
        </p>
        <h2 class="text-xl font-semibold">Rodzaje plików cookies</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            <strong>Niezbędne</strong> - umożliwiają podstawowe funkcje Serwisu.
          </li>
          <li>
            <strong>Bezpieczeństwa</strong> – służą ochronie danych
            użytkowników.
          </li>
          <li>
            <strong>Wydajnościowe</strong> – zbierają informacje o sposobie
            korzystania ze stron.
          </li>
          <li>
            <strong>Funkcjonalne</strong> – pozwalają zapamiętać Twoje
            ustawienia.
          </li>
          <li>
            <strong>Reklamowe</strong> – dostarczają treści reklamowe
            dostosowane do Twoich zainteresowań.
          </li>
        </ul>
        <h2 class="text-xl font-semibold">Jak zarządzać plikami cookies?</h2>
        <p>
          Możesz zmienić ustawienia dotyczące plików cookies w swojej
          przeglądarce, aby:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Odrzucić zapisywanie nowych plików cookies.</li>
          <li>Usunąć istniejące pliki cookies.</li>
          <li>Włączyć powiadomienia o zapisie nowego pliku cookie.</li>
          <li>Zablokować działanie plików cookies.</li>
        </ul>
        <p class="text-sm text-gray-500">
          Uwaga: Zmiana ustawień może wpłynąć na funkcjonalność Serwisu.
        </p>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import { Card, CardContent } from 'ybook-ui';

export default {
  components: {
    Card,
    CardContent,
  },
};
</script>
