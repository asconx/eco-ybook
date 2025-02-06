<template>
  <div class="q-gutter-md flex row">
    <q-img
      class="rounded-borders"
      src="../assets/ludzie.jpg"
      style="width: 200px; height: 200px; border-radius: 50%"
    />
    <div>
      <p class="q-my-none">Gospodarz:</p>
      <h6 class="text-h6 q-my-sm text-weight-bold">Kamil i Viktoria</h6>
      <p class="text-subtitle1"><strong>Znany język:</strong> polski, angielski</p>
      <q-chip
        class="bg-green-2 text-green-10 q-mt-sm"
        clickable
        outline
        rounded
      >
        Gospodarz zaangażowany w ekostarania
      </q-chip>
      <div>
        <q-btn
          class="q-mt-sm"
          color="green-8"
          icon="eco"
          label="Sprawdź postęp działań"
          outline
          rounded
          size="sm"
        />
      </div>
      <div class="q-mt-md">
        <p class="text-subtitle1">Nie ma nas na miejscu, ale zawsze można się z nami skontaktować.</p>
      </div>
    </div>
  </div>

  <div class="q-mt-md">
    <p class="text-subtitle1">
      Jestem człowiekiem z Mazur, który 15 lat temu porzucił je dla Warszawy i gdyby ktoś mi
      kiedyś powiedział, że z typowo miejskiego typa zacznę pałać miłością do wiejskich klimatów,
      to wziąłbym miejską stal i beton i dał po kosztkach :) Jak się jednak okazuje, pewne jest
      tylko to, że nic nie jest pewne. Zmęczeni życiem w mieście od dłuższego czasu staliśmy przed
      koniecznością podjęcia decyzji czy wiązać się z Warszawą na stałe czy być może warto porzucić
      własną strefę komfortu i jeszcze bardziej wejść w ideę Slow Life. Wybraliśmy to drugie.
      Nasz nowy świat znajduje się 2 godziny od Warszawy, w sąsiedztwie Biebrzańskiego Parku Narodowego,
      tam gdzie łosie, żurawie i bataliony.
    </p>
  </div>
  <div class="q-my-lg q-pa-md main-background rounded-borders">
    <div class="flex items-center">
      <q-icon class="text-deep-orange-2" name="info" size="md" />
      <p class="q-ml-sm q-my-none text-body2">
        <strong>Gospodarz jest przedsiębiorcą</strong>
      </p>
    </div>
    <p class="q-mt-sm">
      Rezerwując nocleg na Ybook, zawierasz umowę bezpośrednio z Gospodarzem. Ybook, czyli
      nasza wesoła ekipa, odpowiada za selekcję Gospodarzy, funkcjonalność platformy, płatność
      przedpłaty – Gospodarz za treść oferty, sposób jej realizacji oraz reklamacje. Gospodarz
      jest przedsiębiorcą, więc podlegasz ochronie wg prawa konsumenckiego UE.
    </p>
    <!--TUTAJ JEST PRZYCISK-->
    <q-btn class="q-my-md" 
    color="deep-orange-10" 
    label="Sprawdź szczegóły" 
    rounded 
    unelevated 
    @click="icon =true"/> 

    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6"> Informacje o Gospodarzu i podziale obowiązków</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <p>Oferta noclegu pochodzi od osoby fizycznej.</p>

          <p>To <b>Gospodarz</b>, a nie Ybook, jest odpowiedzialny za realizację i jakość pobytu. W przypadku jakichkolwiek problemów podczas Twojego pobytu, zalecamy bezpośredni kontakt z Gospodarzem już na miejscu. Wiemy, że zrobi wszystko, co w jego mocy, aby rozwiązać sprawę jak najszybciej. Oczywiście, jeśli problemem jest śpiew ptaków o poranku czy zapach natury – są to uroki tego miejsca, które po prostu trzeba docenić.</p>

          <p>Jeśli jednak wystąpi sytuacja wymagająca zgłoszenia reklamacji, możesz skontaktować się bezpośrednio z Gospodarzem albo napisać do nas na adres <a href="kontakt@ybook.pl" target="_blank">kontakt@ybook.pl</a>, a my przekażemy Twoje zgłoszenie. Warto pamiętać, że Ybook to platforma łącząca Gości z gospodarzami wyjątkowych miejsc. Dokładamy wszelkich starań, aby współpracować z miejscami, które spełniają nasze wymagania jakościowe, a każde z nich regularnie weryfikujemy na podstawie opinii naszych użytkowników.</p>

        <p>Za działanie serwisu <a href="https://ybook.com/" color="green" target="_blank">https://ybook.com/</a>, czyli kwestie techniczne, rezerwacje i płatności, odpowiadamy my – zespół Ybook. Jeśli więc napotkasz problem związany z działaniem serwisu (np. płatności, rezerwacje lub inne kwestie techniczne), skontaktuj się z nami pod adresem <a href="mailto:kontakt@ybook.com">kontakt@ybook.com</a>. Nasz zespół odpowiada szybko i skutecznie – jesteśmy tutaj, by Ci pomóc!</p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const icon = ref(false)

</script>


<style lang="sass" scoped>
a 
  color: #004AAD
  text-decoration: underline
  font-style: italic

</style>
