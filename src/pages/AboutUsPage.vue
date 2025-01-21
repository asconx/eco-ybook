<template>
  <q-layout>
    <HeaderComponent />
    <q-page-container>
      <div class="page-container">
        <header>
          <h1>Buszuj po świecie <span class="highlight">z czułością</span></h1>
        </header>

        <main>
          <section class="intro">
            <p>
              Są u nas najpiękniejsze agroturystyki, pensjonaty, maleńkie hotele butikowe i domy wakacyjne.
              Tworzymy społeczność Gospodarzy i Gości, którym nie jest wszystko jedno.
              Wierzymy, że wybierając „slowhopowe” miejsca nie tylko świetnie spędzasz czas, ale realnie wspierasz
              lokalne społeczności, dbasz o dziedzictwo kulturowe i środowisko przyrodnicze.
            </p>
          </section>
            <section class="intro2">
            <p>
              Co zyskujesz? Nie tracisz czasu na sprawdzanie miejsca - robimy to za Ciebie.
              Bonus? Podobno czytanie naszych opisów to czysta przyjemność. Uważamy, że w życiu stanowczo zbyt mało
              czasu poświęcamy na przyjemności, więc serdecznie zapraszamy Cię do skorzystania z naszych zasobów.
            </p>
          </section>
        </main>
      </div>
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import FooterComponent from "components/FooterComponent.vue";
import HeaderComponent from "components/HeaderComponent.vue";
import { ref } from 'vue';

const teamMembers = ref({
  {
    image: new URL('../assets/TeamMember1.png')
  }
})
</script>

<style lang="sass" scoped>
.page-container
  font-family: Arial, sans-serif
  text-align: center
  max-width: 800px
  margin: 0 auto
  color: #333

header h1
  font-size: 2.5rem
  margin-bottom: 1rem

header .highlight
  color: #0077c8
  font-style: italic

.intro
  font-size: 1rem
  line-height: 1.6
  margin-bottom: 2rem
  float:left

.intro2
  font-size: 1rem
  line-height: 1.6
  margin-bottom: 2rem
  float:left

.team
  display: flex
  justify-content: center
  gap: 1rem

.team-member
  width: 220px
  height: 250px
  overflow: hidden
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

.team-member img
  width: 100%
  height: 100%
  object-fit: cover

.footer-icon
  margin-top: 2rem
  font-size: 2rem
</style>