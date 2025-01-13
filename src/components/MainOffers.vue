<template>
  <div class="row q-my-lg">
    <div class="col-6 q-pa-sm">
      <div class="image-container">
        <img src="../assets/german.jpg" class="responsive-image"/>
      </div>
      <div class="content">
        <h3 class="object-name">Niemcy</h3>
       
      </div>
    </div>
    <div class="col-6 q-pa-sm">
      <div class="image-container">
        <img src="../assets/Szwecja.jpg" class="responsive-image"/>
      </div>
      <div class="content">
        <h3 class="object-name">Szwecja</h3>
       
      </div>
    </div>
    <div class="col-6 q-pa-sm">
      <div class="image-container">
        <img src="../assets/Norwegia.jpg" class="responsive-image"/>
      </div>
      <div class="content">
        <h3 class="object-name">Norwegia</h3>
       >
      </div>
    </div>
    <div class="col-6 q-pa-sm">
      <div class="image-container">
        <img src="../assets/irl.jpg" class="responsive-image"/>
      </div>
      <div class="content">
        <h3 class="object-name">Irlandia</h3>
        
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.image-container
  position: relative
  width: 100%
  height: 550px
  overflow: hidden

.responsive-image
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center
  border-radius: 20px

.content
  margin-top: 10px
  text-align: left

.object-name
  font-size: 1.2rem
  font-weight: bold
  margin: 0

.location
  font-size: 0.9rem
  color: gray
  margin: 5px 0

.price
  font-size: 1rem
  font-weight: bold
  color: #333


@media (max-width: 950px)
  .mobile-toolbar
    align-items: start
    padding-top: 18px !important
</style>

