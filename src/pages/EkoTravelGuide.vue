<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <q-parallax
        :height="400" src="../assets/kamper.jpg"
      >
        <h4 class="text-h4 text-white q-my-md">Przewodnik Świadomego Podróżnika</h4>
        <h3 class="text-h3 text-white q-my-sm">Weź e-book z pomysłami jak podróżować lepiej</h3>
      </q-parallax>
      <div class="lagoon-background q-mb-xl">
        <div class="wrapper q-pa-lg">
          <p class="text-subtitle1">Pod jednym z naszych postów na FB ktoś napisał: "Najbardziej eko jest zostanie w domu na wakacje". Być może, ale nie idźmy w ekstrema. Mamy tylko jedno życie,
            przydałoby się je spędzić z sensownym rozmachem i pojechać czasem tu i ówdzie, poznać świat i ludzi.</p>

          <p class="text-subtitle1">Warto nauczyć się pewnych sztuczek, dzięki którym nie narobimy więcej bałaganu niż do tej pory, a kolejnym pokoleniom zostawimy Matkę Ziemię może nie w idealnej, ale zadowalającej kondycji.

Richard Butler, wybitny naukowiec badający m.in. zagadnienie zrównoważonego rozwoju, powiedział, że turystyka uprawiana przez zbyt dużą liczbę nawet najbardziej świadomych ekoturystów nigdy nie będzie w pełni zrównoważona.

Hej Richard, ale przecież możemy próbować! My spróbowaliśmy. Ten e-book to zbiór wskazówek, które mogą pomóc zmniejszyć ślad środowiskowy Waszej podróży. I co najlepsze, jest za darmo! Dodajemy go też do każdej rezerwacji na Slowhopie. Zachęcamy, żeby rady w nim zawarte przetestować osobiście, a być może wypracować własne.

</p>
        </div>
      </div>
      <div class="row wrapper q-my-xl q-pa-lg">
        <div class="col-6 q-px-lg">
          <img alt="" class="full-width" src="../assets/e-book.jpeg" style="border-radius: 30px">
        </div>
        <div class="col-6 q-px-lg">
          <h4 class="text-h4 q-my-lg">Dowiecię się miedzy innymi</h4>
          <ul role="list">
            <li>kiedy, jak i dokąd jechać, by negatywny wpływ Waszej podróży na środowisko był jak najmniejszy,</li>
            <li>jak się pakować żeby przyrodzie (i Wam) było lżej,</li>
            <li>z czego zrezygnować, a o co wzbogacić swoje wyprawy, by świat był trochę lepszy i przetrwał dłużej,</li>
            <li>jak zmniejszyć swój turystyczny ślad środowiskowy,</li><li>w jakie pamiątki z wyprawy warto inwestować,</li>
            <li>jak być żegnanym ze łzami w oczach gościem agroturystyk, pensjonatów i domków na wyłączność.</li>
          </ul>
        </div>
      </div>
      <div class="wrapper q-pa-lg">
        <h5 class="text-h4 q-my-lg">A przede wszystkim: jak stać się świadomym podróżnikiem!</h5>
        <p class="text-subtitle1">Zapiszcie ten Przewodnik w ulubionych zakładkach na lapku lub telefonie i wypróbujcie go w czasie swoich wojaży!</p>
        <p class="text-subtitle1">Zajawki z naszego e-booka:</p>
        <div class="q-py-lg">
          <img alt="" class="full-width" src="../assets/menu.jpeg" style="border-radius: 30px">
        </div>
      </div>
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import FooterComponent from "components/FooterComponent.vue";
import HeaderComponent from "components/HeaderComponent.vue";
</script>
<style lang="sass" scoped>
.text-subtitle1
  font-size: 1.1rem
</style>
