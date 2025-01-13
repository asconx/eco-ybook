<template>
  <h3 class="q-my-sm">{{ props.profile.name }}</h3>
  <h6 class="q-my-sm text-subtitle1" style="text-decoration: underline">Sojczynek , Podlasie, Polska</h6>
  <div class="q-my-md">
    <q-chip color="teal" outline>
      Mały domek
    </q-chip>
    <q-chip color="pink" outline>
      Bez zwierzaków
    </q-chip>
    <q-chip color="blue" outline>
      Gotujemy dla Was posiłki
    </q-chip>
  </div>
  <div v-if="props.profile.description" class="q-my-md text-body1">
    <h6 class="q-my-sm">Opis</h6>
    <p v-html="cleanDescription(props.profile.description)"></p>
    <p>Byliście kiedyś nad Biebrzą? To prawdziwa Druga Strona, równoległa rzeczywistość, zwłaszcza dla ludzi z
      miasta. I nie ma przesady w opisach mgły nad łąką, głośnym nawoływaniu żurawi i raptownym spowolnieniu.
      Każde słowo to prawda. Zbudowaliśmy tu mikrowioskę we wsi Sojczynek, nieopodal Carskiej Drogi. W dawnych
      morskich kontenerach jest design, są wielkie okna z widokiem na naturę, a obok każdego fińska balia z
      hydromasażem. Stoją pod gołym niebem i nocnymi gwiazdami, obiecując relaks ciała i umysłu każdemu, kto do
      niej wejdzie.</p>

  </div>
  <div class="q-my-lg flex q-gutter-md">
    <q-btn color="red" label="kuchnia" rounded unelevated />
    <q-btn color="green" label="Jak spędzić czas?" rounded unelevated />
    <q-btn color="orange" label="Dla dzieci" rounded unelevated />
    <q-btn color="cyan" label="Praca zdalna – czy to możliwe?" rounded unelevated />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({ profile: null })
function cleanDescription(description: any) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(description, "text/html");
  doc.querySelectorAll("[style]").forEach(el => el.removeAttribute("style"));
  return doc.body.innerHTML;
}
</script>


<style lang="sass" scoped>


</style>
