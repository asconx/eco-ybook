<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <div class="cookies-policy-container">
      <h1>Polityka plików cookies</h1>
      <section>
        <h2>Pojęcia używane w polityce plików cookies</h2>
        <p>
          Pliki cookies - to małe pliki tekstowe zapisywane przez Twoją przeglądarkę na dysku komputera lub innego
          urządzenia.
          Pliki te przechowują informacje potrzebne do identyfikacji użytkownika lub zapamiętywania historii działań w
          Serwisach.
          Zawierają one m.in. nazwę strony internetowej, z której pochodzą, czas przechowywania oraz unikalny numer.
        </p>
        <p>
          Inne technologie podobne do plików cookies:
        <ul>
          <li>
            <strong>Fingerprinting</strong> - zbieranie danych dotyczących urządzenia (np. przeglądarki, systemu
            operacyjnego, strefy czasowej, rozmiaru ekranu),
            które umożliwiają identyfikację użytkownika oraz zwiększenie bezpieczeństwa Serwisu.
          </li>
          <li>
            <strong>Rozpoznawanie urządzeń</strong> - analiza danych urządzenia i ich przypisanie do wspólnego
            identyfikatora w celu rozpoznania użytkownika na różnych urządzeniach.
          </li>
        </ul>
        </p>
      </section>
      <section>
        <h2>Jakich rodzajów plików cookies używamy i w jakim celu?</h2>
        <p>W naszym Serwisie stosujemy różne rodzaje plików cookies, w tym:</p>
        <ul>
          <li><strong>Niezbędne</strong> - umożliwiają korzystanie z podstawowych funkcji Serwisu, takich jak
            uwierzytelnianie użytkowników.</li>
          <li><strong>Bezpieczeństwa</strong> - służą wykrywaniu nadużyć i ochronie danych użytkowników.</li>
          <li><strong>Wydajnościowe</strong> - zbierają informacje o sposobie korzystania ze stron, co pozwala nam
            poprawiać ich działanie.</li>
          <li><strong>Funkcjonalne</strong> - pozwalają zapamiętać Twoje ustawienia, np. język, region czy rozmiar
            czcionki.</li>
          <li><strong>Reklamowe</strong> - dostarczają treści reklamowe dostosowane do Twoich zainteresowań.</li>
        </ul>
        <p>Stosujemy pliki cookies o różnym czasie życia (sesyjne i trwałe) oraz z różnych domen (nasze i zewnętrzne).
        </p>
      </section>
      <section>
        <h2>Jak zarządzać plikami cookies?</h2>
        <p>
          Możesz samodzielnie decydować o warunkach przechowywania plików cookies za pomocą ustawień przeglądarki. W
          sekcji „Pomoc” znajdziesz instrukcje, jak:
        </p>
        <ul>
          <li>Odrzucić zapisywanie nowych plików cookies.</li>
          <li>Usunąć istniejące pliki cookies.</li>
          <li>Włączyć powiadomienia o zapisie nowego pliku cookie.</li>
          <li>Zablokować działanie plików cookies.</li>
        </ul>
        <p>
          Uwaga: Zmiana ustawień przeglądarki może wpłynąć na funkcjonalność Serwisu, a w niektórych przypadkach
          uniemożliwić korzystanie z jego niektórych usług.
        </p>
      </section>
    </div>
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>
<style scoped>
.cookies-policy-container {
  margin: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.cookies-policy-container h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.cookies-policy-container h2 {
  font-size: 1.5em;
  margin-top: 20px;
}

.cookies-policy-container ul {
  margin: 10px 0;
  padding-left: 20px;
}

.cookies-policy-container p,
li {
  font-size: 1em;
  margin: 10px 0;
}
</style>


<style scoped>
footer {
  text-align: center;
  padding: 10px;
  background-color: #f8f8f8;
  font-size: 0.9em;
}

footer a {
  color: #007bff;
  text-decoration: none;
  margin-left: 10px;
}

footer a:hover {
  text-decoration: underline;
}
</style>
<script lang="ts" setup>
import FooterComponent from 'components/FooterComponent.vue';
import HeaderComponent from "components/HeaderComponent.vue";
</script>