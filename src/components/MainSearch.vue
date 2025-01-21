<template>
  <div class="grey-wrapper flex justify-center items-center q-py-sm q-px-lg">
    <q-select
      borderless
      use-input
      v-model="reservation"
      label="Gdzie?"
      :options="reservations"
      @filter="filterFn"
      @update:model-value="updateReservation"
      class="q-ma-sm my-button2"
      bg-color="white"
      style="width: 230px"
    >
      <template v-slot:prepend>
        <q-icon name="ti-location-pin" color="black" />
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> Brak rezultatów </q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-separator vertical inset />
    <q-input
      borderless
      class="q-ma-sm my-button3"
      bg-color="white"
      label="Kiedy?"
      :model-value="dates.from ? `${dates.from} &rarr; ${dates.to}` : ''"
      :style="dates.from ? 'width: 295px' : 'auto'"
    >
      <template v-slot:prepend>
        <span v-if="dates.from" class="highlight-item">{{
          `${daysCount || 0} ${daysCount > 4 ? 'nocy' : 'noce'}`
        }}</span>
      </template>
      <LiteDateRangePicker
        v-on:selected="(newDates) => dateRangeChange(newDates)"
      />
      <template v-slot:append>
        <q-icon
          v-if="dates.from"
          name="close"
          @click="
            dates.from = '';
            dates.to = '';
          "
          class="cursor-pointer"
        />
      </template>
    </q-input>
    <q-separator vertical inset />
    <q-input
      borderless
      class="q-ma-sm my-button2"
      bg-color="white"
      label="Kto?"
      v-model="people"
    >
      <q-menu
        style="border: 1px solid #ccc; width: 175px"
        class="no-shadow text-center q-pa-md"
      >
        <div class="flex flex-column justify-center items-center">
          <div class="text-center q-pa-sm">
            <q-item-label class="q-pb-sm">Dorośli</q-item-label>
            <div class="flex justify-center items-center">
              <q-btn
                outline
                dense
                color="primary"
                size="xs"
                icon="remove"
                @click="decrease(adults)"
              />
              <input v-model="adults.value" class="custom-number-val" />
              <q-btn
                outline
                dense
                round
                color="primary"
                size="xs"
                icon="add"
                @click="increase(adults)"
              />
            </div>
          </div>
          <div class="text-center q-pa-sm">
            <q-item-label class="q-pb-sm">Dzieci</q-item-label>
            <div class="flex justify-center items-center">
              <q-btn
                outline
                dense
                round
                color="primary"
                size="xs"
                icon="remove"
                @click="decrease(children)"
              />
              <input v-model="children.value" class="custom-number-val" />
              <q-btn
                outline
                dense
                round
                color="primary"
                size="xs"
                icon="add"
                @click="increase(children)"
              />
            </div>
            <!-- Dynamiczny wybór wieku dzieci -->
            <div
              v-for="(child, index) in children.people"
              :key="'child-' + index"
              class="q-pa-xs"
            >
              <q-input
                outlined
                label="Wiek dziecka"
                v-model="children.people[index]"
                type="number"
                class="q-mb-xs"
              />
            </div>
          </div>
        </div>
        <q-btn
          unelevated
          rounded
          color="primary"
          label="zapisz"
          @click="savePeopleValues"
          v-close-popup
          class="q-mt-sm my-button2"
        />
      </q-menu>
      <template v-slot:append>
        <q-icon
          v-if="people"
          name="close"
          @click="people = ''"
          class="cursor-pointer"
        />
      </template>
    </q-input>
    <q-separator vertical inset />
    <q-input
      borderless
      class="q-ma-sm my-button2"
      bg-color="white"
      label="Filtry"
      v-model="people"
    >
      <template v-slot:prepend>
        <q-icon name="ti-wand" color="black" />
      </template>
    </q-input>
    <div>
      <q-btn
        size="lg"
        unelevated
        border-radius="15px"
        color="primary"
        text-color="white"
        icon="ti-search"
        class="q-mx-md my-button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LiteDateRangePicker from 'components/LiteDateRangePicker.vue';
import { differenceInDays, format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { ref } from 'vue';

const dates = ref({ from: '', to: '' });
const daysCount = ref(0);
const people = ref('');
const adults = ref({ value: 2, people: [] }); // Dorośli - z wartością początkową
const children = ref({
  value: 0,
  people: [], // Tablica przechowująca wiek dzieci
});

const dateRangeChange = (newDates: { from: string; to: string }) => {
  dates.value = {
    from: format(new Date(newDates.from), 'dd.MM.yyyy', { locale: pl }),
    to: format(new Date(newDates.to), 'dd.MM.yyyy', { locale: pl }),
  };
  daysCount.value = differenceInDays(
    new Date(newDates.to),
    new Date(newDates.from)
  );
};

const increase = (variable: { value: number; people: number[] }) => {
  variable.value++;
  variable.people.push(null); // Dodaj nowe pole dla osoby
};

const decrease = (variable: { value: number; people: number[] }) => {
  if (variable.value > 0) {
    variable.value--;
    variable.people.pop(); // Usuń ostatnią osobę
  }
};

const savePeopleValues = () => {
  // Zapisujemy wartość dorosłych i dzieci (wiek dzieci)
  people.value = `Dorośli: ${adults.value.value}, Dzieci: ${
    children.value.value
  }, Wiek dzieci: ${children.value.people.join(', ')}`;
};
</script>

<style lang="sass" scoped>
.custom-number-val
  font-size: 16px
  width: 40px  /* Zwiększenie szerokości dla wygodniejszego wyświetlania liczb */
  text-align: center
  margin: 0 4px  /* Zmiana marginesu, aby lepiej dopasować do szerokości */
  background-color: transparent
  border: none

  &:focus
    outline: none

@media (max-width: 950px)
  .my-button
    width: 11em

@media (max-width: 950px)
  .my-button2
    width: 15em

@media (max-width: 950px)
  .my-button3
    width: 17em

.grey-wrapper
  border-radius: 30px
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap  /* Zapewnienie elastyczności w układzie */
  border: 1px solid rgba(0, 0, 0, 0.12)
  gap: 5px
  background-color: white

.q-menu
  width: 230px  /* Dopasowanie szerokości menu do inputa */
  margin-left: 0  /* Zresetowanie marginesu */
  margin-right: 0  /* Zresetowanie marginesu */
  display: flex
  flex-direction: column
  justify-content: center  /* Wyśrodkowanie wewnętrznych elementów */
  align-items: center  /* Wyśrodkowanie wewnętrznych elementów */
  background-color: #ede8d0

@media (max-width: 950px)
  .grey-wrapper
    flex-direction: column
</style>
