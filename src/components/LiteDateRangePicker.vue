<template>
  <input type="text" ref="litePicker" readonly class="lite-picker-input" />
</template>

<script>
import Litepicker from 'litepicker';
import { defineComponent, ref, onMounted } from 'vue';
import { format } from 'date-fns';

export default defineComponent({
  name: 'LiteDateRangePicker',

  setup(_, { emit }) {
    const litePicker = ref(null);
    const picker = ref(null);

    const initLightPicker = () => {
      if (picker.value) {
        picker.value.destroy();
      }

      picker.value = new Litepicker({
        element: litePicker.value,
        singleMode: false,
        numberOfMonths: 2,
        numberOfColumns: 2,
        tooltipText: {
          one: 'noc',
          few: 'nocy',
          many: 'nocy',
          other: 'noce',
        },
        lockDays: [['2000-01-01', format(new Date(), 'yyyy-MM-dd')]],
        lang: 'pl',
        tooltipNumber: (totalDays) => {
          return totalDays - 1;
        },
        setup: (pickerInstance) => {
          pickerInstance.on('render', () => {
            const dayItems = document.querySelectorAll('.litepicker .day-item');
            dayItems.forEach((item) => {
              const span = document.createElement('span');
              span.textContent = '340zl';
              span.classList.add('day-item-label');
              item.appendChild(span);
            });
          });
        },
      });

      picker.value.on('selected', (date1, date2) => {
        emit('selected', {
          from: date1.format('YYYY-MM-DD'),
          to: date2.format('YYYY-MM-DD'),
        });
      });
    };

    onMounted(() => {
      initLightPicker();
    });

    return {
      litePicker,
    };
  },
});
</script>

<style lang="sass">
.lite-picker-input
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  opacity: 0
  cursor: pointer

.litepicker
  font-family: 'DM Sans', sans-serif
  border: 1px solid #ccc
  box-shadow: none
  border-radius: 6px
  .container__days
    cursor: pointer
    .day-item
      color: #000
      font-size: 14px
      text-align: center
      text-decoration: none
      border-radius: 50%
      -webkit-transition: color 0.3s, border 0.3s
      transition: color 0.3s, border 0.3s
      cursor: default
      line-height: 30px
      margin: 4px 0

      &.is-today
        background-color: #000
        color: #fff

      &.is-highlighted
        background-color: #fbf1e6
        color: $primary

      &.is-start-date.is-end-date
        border-top-left-radius: 50%
        border-bottom-left-radius: 50%
        border-top-right-radius: 50%
        border-bottom-right-radius: 50%

      &:hover
        box-sizing: border-box
        color: #000
        -webkit-box-shadow: none
        box-shadow: none
        position: relative
        &::after
          content: ""
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          background-color: #000
          border-radius: 50%
          opacity: 0.1
      &:not(.is-flipped).is-start-date, &.is-end-date.is-flipped
        position: relative
        background-color: #000
        display: flex
        align-items: center
        justify-content: center
        border-radius: 50%
        color: #fff
        &::before
          content: ""
          position: absolute
          top: 0
          left: 0
          background-color: #000
          border-top-left-radius: 50%
          border-bottom-left-radius: 50%
          opacity: 0.1
          width: 100%
          height: 100%
          z-index: 0

      &:not(.is-flipped).is-end-date, &.is-start-date.is-flipped
        position: relative
        background-color: #000
        display: flex
        align-items: center
        justify-content: center
        border-radius: 50%
        color: #fff
        &::before
          content: ""
          position: absolute
          top: 0
          left: 0
          background-color: #000
          border-top-right-radius: 50%
          border-bottom-right-radius: 50%
          opacity: 0.1
          width: 100%
          height: 100%
          z-index: 0

      &.is-in-range
        background-color: #000
        opacity: 0.1
        color: #fff

  .day-item-label
    font-size: 11px  /* Zmniejszamy rozmiar czcionki */
    color: #888
    margin-top: -20px
    display: block
    text-align: center

@media (max-width: 400px)
  .litepicker .container__months.columns-2
    width: 277px
</style>
