<template>
  <div
    class="main-background q-pa-md"
    style="border-radius: 15px; border: 1px solid #dedede"
  >
    <p class="text-subtitle1 q-mb-sm">
      Od <span class="text-h5 text-bold text-primary">340 zł</span> noc
    </p>
    <p class="text-subtitle1 q-mt-sm q-mb-lg">cena bez posiłków</p>
    <q-input
      :model-value="dates.from ? `${dates.from} &rarr; ${dates.to}` : ''"
      bg-color="white"
      class="q-my-md"
      label="Kiedy?"
      outlined
      rounded
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
          class="cursor-pointer"
          name="close"
          @click="
            dates.from = '';
            dates.to = '';
          "
        />
      </template>
    </q-input>
    <q-input bg-color="white" class="q-my-md" label="Kto?" outlined rounded>
    </q-input>
    <q-btn
      class="q-my-md full-width"
      color="deep-orange-10"
      icon-right="ti-angle-right"
      label="Przejdź do podsumowania"
      rounded
      size="lg"
      unelevated
    />
  </div>
</template>
<script lang="ts" setup>
import { addDays, differenceInDays, format } from 'date-fns';
import LiteDateRangePicker from 'components/LiteDateRangePicker.vue';
import { pl } from 'date-fns/locale';
import { ref } from 'vue';

const dates = ref({
  from: format(addDays(new Date(), 130), 'yyyy-MM-dd'),
  to: format(addDays(new Date(), 133), 'yyyy-MM-dd'),
});

const daysCount = ref(0);

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
</script>

<style lang="sass" scoped></style>
