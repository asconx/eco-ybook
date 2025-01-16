<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <q-parallax
        :height="400" src="../assets/lampki.jpg"
      >
        <h4 class="text-h4 text-white q-my-md enderho">Zaskocz bliskich voucherem</h4>
        <h3 class="text-h3 text-white q-my-sm enderht">Podaruj przygodę</h3>
      </q-parallax>
      <div class="lagoon-background q-mb-xl">
        <div class="wrapper q-pa-lg">
          <h4 class="text-h4 q-my-lg">Twój ratunek na ostatnią chwilę</h4>
          <p class="text-subtitle1">Brakuje Ci prezentu, a czas nieubłaganie płynie? Żaden problem! Mamy dla Ciebie
            szybkie i idealne rozwiązanie – voucher na wyjazd z Ybook.</p>

          <p class="text-subtitle1">Szukasz czegoś wyjątkowego dla bliskiej osoby? A może po prostu brakuje Ci pomysłu,
            a nie chcesz dać czegoś banalnego? Nasz voucher to nie tylko prezent – to zaproszenie do świata przygód,
            relaksu i nowych doświadczeń.</p>

          <p class="text-subtitle1">Zamówienie jest szybkie i bezproblemowe: wybierasz kwotę, opłacasz, a voucher w
            formie eleganckiego pliku PDF ląduje w Twojej skrzynce mailowej w kilka chwil. Zero stresu, zero kolejek,
            zero czekania.
          </p>
          <p class="text-subtitle1">Co oferujemy? Podarunek, który spełnia marzenia o relaksie w pięknych miejscach,
            sielance na łonie natury, czy błogiej chwili przy lokalnych przysmakach. A najlepsze? Możesz to zrobić
            dosłownie w ostatniej chwili – my zadbamy o całą resztę. </p>
        </div>
      </div>
      <div class="row wrapper q-my-xl q-pa-lg mobile">
        <div class="col-6 q-px-lg container-mobile">
          <img alt="" class="full-width" src="../assets/voucher1.webp" style="border-radius: 30px">
        </div>
        <div class="col-6 q-px-lg container-mobile">
          <h4 class="text-h4 q-my-lg">Voucher do wydrukowania</h4>
          <div class="q-mb-md">
            <label class="text-subtitle1">Kwota vouchera</label>
            <div class="row q-mt-sm">
              <div>
                <q-btn class="btn-option q-ma-sm" label="200 zł" outline rounded />
                <q-btn class="btn-option q-ma-sm" label="500 zł" outline rounded />
                <q-btn class="btn-option q-ma-sm" label="1000 zł" outline rounded />
                
              </div>
              <q-input class="q-ma-sm" outlined placeholder="np. 1500" rounded style="width: 100px" />
            </div>
          </div>
          <div class="q-my-md">
            <q-input
              label="Imię osoby obdarowanej"
              outlined
              placeholder="Np. Ania i Tomek"
              square
              style="max-width: 400px"
            />
          </div>
          <div class="q-my-lg">
            <q-btn
              color="primary"
              icon-right="ti-angle-right"
              label="Przejdź do podsumowania"
              size="lg"
              rounded
              unelevated
            />
          </div>
        </div>
      </div>
      <div class="wrapper q-pa-lg">
        <h5 class="text-h4 q-my-lg">Stwórz swój unikalny voucher</h5>
        <p class="text-subtitle1">Twój voucher to coś więcej niż tylko prezent – to małe dzieło sztuki, które możesz
          stworzyć samodzielnie. Wystarczy kilka kroków: złóż harmonijkę zgodnie z oznaczeniami, oderwij perforowane
          sekcje i nadaj swojemu voucherowi wyjątkowy charakter.</p>
        <p class="text-subtitle1">Nie wiesz, jak zacząć? Spokojnie – przygotowaliśmy krótki film instruktażowy, który
          pokaże Ci, jak w prosty sposób złożyć voucher. Zajrzyj poniżej i odkryj, jak w kilka minut wyczarować coś
          naprawdę wyjątkowego!</p>
        <div class="q-py-lg">
          <q-video
            :ratio="16/9"
            src="https://www.youtube.com/embed/2AWStGSA56Q?si=bI7ZEJfOPdT8iOyq"
          />
        </div>
      </div>
      <div class="main-background q-py-lg">
        <div class="wrapper">
          <VoucherFAQ />
        </div>
      </div>
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import FooterComponent from "components/FooterComponent.vue";
import HeaderComponent from "components/HeaderComponent.vue";
import VoucherFAQ from "components/VoucherFAQ.vue";</script>
<style lang="sass" scoped>
.text-subtitle1
  font-size: 1.1rem

@media (max-width: 630px) 
  .mobile 
   flex-direction: column

  .enderho
    text-align: center

  .enderht
    text-align: center

@media (max-width: 1050px) 
  .container-mobile
    width: 100%



</style>
