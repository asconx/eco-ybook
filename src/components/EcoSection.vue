<template>
  <q-img src="../assets/sosny.jpg">
    <section class="absolute-bottom text-center q-pa-lg">
      <h4 class="q-pa-lg wrapper text-white">Naturalne piękno i&nbsp;autentyczność znikają szybciej, niż sobie
        wyobrażamy. Dlatego w&nbsp;Ybook powołaliśmy program
        wsparcia miejsc wyjątkowych. Razem z&nbsp;Właścicielami i&nbsp;Gośćmi troszczymy się o ochronę przyrody i&nbsp;lokalnych
        tradycji, tworząc przestrzeń, gdzie natura i&nbsp;kultura odzyskują swoje miejsce. Każda rezerwacja przez Ybook
        to
        krok w&nbsp;stronę harmonii z&nbsp;otaczającym światem.</h4>
      <img src="../assets/recycle.png" width="150"/>
    </section>
  </q-img>
  <div class="row justify-center wrapper q-py-lg q-my-xl">
    <div class="col-12 col-md-3">
      <div class="text-left">
        <h4>Ziemia w Twoich <br />dłoniach</h4>
        <p class="stat-description">
          W Ybook wierzymy, że każda podróż może być krokiem w stronę lepszego świata. Razem z gospodarzami i
          podróżnikami wspieramy lokalne społeczności oraz troszczymy się o naturę.
        </p>
        <q-btn to="/initiative-for-conscious-tourism" rounded unelevated size="lg" class="q-mt-lg" color="primary" icon-right="ti-angle-right" label="Zobacz więcej"/>
      </div>
    </div>
    <div class="col-12 col-md-9">
      <div class="row">
        <div class="col-12 col-sm-4">
          <div class="eco-tile">
            <img alt="Zielone Podróże" class="eco-tile-image full-width" height="300" src="../assets/las2.jpg"/>
            <div class="eco-tile-content">
              <h6>Zielone Podróże</h6>
              <p>Odkryj miejsca noclegowe, które aktywnie dbają o środowisko.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="eco-tile">
            <img alt="Eko Poradnik Podróżnika" class="eco-tile-image full-width" height="300" src="../assets/wrzos.jpg"/>
            <div class="eco-tile-content">
              <h6>Eko Poradnik Podróżnika</h6>
              <p>Praktyczne wskazówki, jak podróżować z troską o środowisko.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="eco-tile">
            <img alt="Społeczność Eko Podróżników" class="eco-tile-image full-width" height="300" src="../assets/las3.jpg"/>
            <div class="eco-tile-content">
              <h6>Społeczność Eko Podróżników</h6>
              <p>Przyczyń się do ochrony miejsc, które kochasz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.eco-tile
  padding: 30px 10px

.eco-tile-image
  border-radius: 20px

h6
  margin: 5px 0

</style>
