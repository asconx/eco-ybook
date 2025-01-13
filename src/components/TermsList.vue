<template>
  <q-list>
    <q-card v-for="offer in offers" v-bind:key="offer.id" class="q-pa-md q-my-md" flat style="border-radius: 30px">
      <div class="q-ma-md">
        <q-item-label class="text-h6">
          {{ offer.name }}
        </q-item-label>
        <div class="flex items-center">
          <q-item-label class="text-subtitle1 y-my-sm">
            {{ displayText(offer.description) }}
          </q-item-label>
          <q-btn color="primary" flat rounded @click="toggleText">
            {{ isExpanded ? "mniej" : "więcej" }}
          </q-btn>
        </div>
      </div>
      <q-item class="q-item-room">
        <div class="photo">
          <div v-if="!offer.photos.length" class="bg-grey-3 no-photo">Brak zdjęć</div>
          <img v-if="offer.photos.length && offer.photos.length === 1" :src="`${baseUrl}${offer.photos[0].path}`"
               style="border-radius: 15px">
          <q-carousel v-else v-model="photos[offer.id]" animated arrows class="carusel" infinite navigation thumbnails>
            <template v-for="photo in offer.photos" :key="photo.id">
              <q-carousel-slide :img-src="`${baseUrl}${photo.path}`" :name="photo.file_id"
                                style="border-radius: 15px" />
            </template>
          </q-carousel>
        </div>
        <q-item-section top>
          <div class="flex q-ma-md">
            <template v-for="bed in offer.beds" v-bind:key="bed.value">
              <q-chip color="deep-orange-10" text-color="white">{{ bed.label }}</q-chip>
            </template>
            <template v-for="amenity in offer.amenities" v-bind:key="amenity.type">
              <q-chip color="primary" icon="check" outline>{{ amenity.label }}</q-chip>
            </template>
          </div>

        </q-item-section>
        <q-separator vertical />
        <div class="q-ma-md">
          <h4 class="text-h4 text-bold">1850zł</h4>
          <q-tree
            v-model:expanded="expanded"
            :nodes="simple"
            node-key="label"
          />
          <q-btn
            class="q-my-md full-width"
            color="primary"
            icon-right="ti-angle-right"
            label="Przejdź do podsumowania"
            rounded
            size="lg"
            unelevated
          />
        </div>
      </q-item>
    </q-card>
  </q-list>
</template>

<script lang="ts" setup>
import { addDays, format } from "date-fns";
import { ref } from "vue";
import { bookingService } from "src/services/BookingService";
import { amenities, beds } from "src/utils/optionsData";
import { baseUrl } from "src/utils/baseUrl";

const props = defineProps({ profile: null });

const expanded = ref(["Cena za cały pobyt", "Good food (with icon)"]);
const simple = ref([
  {
    label: "Cena za cały pobyt",
    children: [
      {
        label: "Cena za kwaterę",
        children: [
          { label: "320zł/noc - cennik 18-07-2024 - 22-07-2024" },
          { label: "400zł/noc - cennik 23-07-2024 - 30-07-2024" }
        ]
      },
      {
        label: "Opłata klimatyczna",
        children: [
          { label: "Prompt attention" },
          { label: "Professional waiter" }
        ]
      }
    ]
  }
]);

const dates = ref({
  from: format(addDays(new Date(), 130), "yyyy-MM-dd"),
  to: format(addDays(new Date(), 133), "yyyy-MM-dd")
});

const daysCount = ref(0);


const fullText = "Pokój dostosowany również do potrzeb osób niepełnosprawnych. Główną zaletą pokoju jest wyjście na taras oraz duża, wygodna łazienka. Pokój polecamy małżeństwu z dwójką pociech lub trzem dorosłym osobom.";
const isExpanded = ref(false);

const displayText = (fullText: string) => {
  if (isExpanded.value) {
    return fullText;
  } else {
    return fullText.split(". ")[0] + "...";
  }
};

const toggleText = () => {
  isExpanded.value = !isExpanded.value;
};

const offers = ref(null);
const selectedOfferId = ref(0);
const selectedOfferData = ref(null);
const photos = ref<any>({});

const isCalendar = ref(false);
const lockedDays = ref([]);

const getRooms = async () => {
  if (!dates.value || !dates.value.from || !dates.value.to) {
    return;
  }
  if (!props.profile.name) {
    //const data = await organizationService.getOrganizationSlug()
    //props.profile.name = data.slug
  }
  bookingService
    .getOnlineReservationData(
      "karla",
      dates.value.from,
      dates.value.to,
      2,
      0,
      0,
      0,
      0
    )
    .then((data: any) => {
      offers.value = data;
      console.log(data);
      if (data) {
        data.map((offer: any) => {
          offer.amenities = offer.amenities.map((amenity: any) =>
            amenities.find((item) => item.type === amenity.type)
          );
          offer.beds = offer.beds.map((bed: any) => beds.find((item) => item.value === bed.type));

          photos.value[offer.id] = offer.photos[0].file_id;
          if (offer.id === selectedOfferId.value) {
            selectedOfferData.value = offer;
          }
        });
      }
    });
};
getRooms();

</script>
<style lang="sass" scoped>
.grey-wrapper
  border-radius: 80px
  border-radius: 80px
  padding: 10px 30px
  max-width: 650px

.photo
  width: 100%
  height: 100%
  max-width: 360px
  padding: 5px 0
  display: flex

  .no-photo
    width: 100%
    height: 100%
    max-width: 360px
    display: flex
    align-items: center
    justify-content: center

  .q-carousel
    width: 100%
    height: 330px
    max-width: 360px

  img
    width: 100%
    max-width: 360px
    height: 330px

@media (max-width: 900px)
  .q-list
    overflow-x: scroll
    display: flex
    flex-wrap: nowrap
  .q-item-room
    flex-direction: column
    min-width: 300px
  .q-carousel
    height: 220px !important
</style>

