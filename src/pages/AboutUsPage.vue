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
          <section class="team">
            <div class="team-member">
              <q-img src="../assets/TeamMember1.png" alt="Team member 1" />
            </div>
            <div class="team-member">
              <q-img src="../assets/TeamMember2.png" alt="Team member 2" />
            </div>
            <div class="team-member">
              <q-img src="../assets/TeamMember3.png" alt="Team member 3" />
            </div>
            <div class="team-member">
              <q-img src="../assets/DogIcon.png" alt="Team member 4" />
            </div>
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
</script>

<style lang="sass" scoped>
.q-layout
  background-color: #f4f1eb

.page-container
  font-family: Arial, sans-serif
  text-align: center
  max-width: 800px
  margin: 0 auto
  color: #333
  background-color: #f4f1eb

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

.team-member img
  width: 100%
  height: 100%
  object-fit: cover

.footer-icon
  margin-top: 2rem
  font-size: 2rem
</style>