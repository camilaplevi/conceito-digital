<script setup lang="ts">
import { ref } from 'vue';
import { imagesConceito } from 'src/assets/images/Images'

const marketingTitle = ref('MARKETING')
const marketingText = ref('Se você chegou até essa página, é porque nosso marketing é bom!')
const secondMktText = ref('“O tempo é a única coisa que possuímos, e mesmo assim, muitos o desperdiçam como se fosse abundante.”')
const textImage = ref('“Se um homem não sabe para onde está navegando, nenhum vento é favorável.”')

</script>

<template>
  <q-page class="home-page"
    style="background: radial-gradient(50% 50% at 50% 50%, #242424 0%, #000 100%); position: relative; min-height: 100vh; display: flex; justify-content: center; overflow: hidden;">
    <div class="main-container" style="width: 100%; max-width: 1200px; margin: 0 auto; position: relative;">

      <div style="position: relative;">
        <div class="main-title" style="position: relative; z-index: 1; text-align: center; line-height: 0.8;">
          <p style="font-family: BebasNeue; font-size: 300px;
                   background: linear-gradient(90deg, #00C2FF80 0%, #AF00FF80 100%);
                   -webkit-background-clip: text; 
                   background-clip: text;
                   color: transparent;
                   margin: 0;
                   padding: 0;
                   display: inline-block;">
            {{ marketingTitle }}
          </p>
        </div>

        <div class="main-image-container"
          style="position: absolute; top: 0; left: 0; width: 100%; z-index: 2; text-align: center; margin-top: -230px;">
          <img :src="imagesConceito.mainImage" alt="" class="main-image"
            style="max-height: 854px; object-fit: contain; transform: translateY(30%);">
        </div>
      </div>

      <div class="marketing-area"
        style="display: flex; justify-content: space-between; width: 100%; max-width: 1050px; margin: 17px auto 0; position: relative; z-index: 3;">
        <div class="column marketing-left"
          style="width: 45%; display: flex; flex-direction: column; align-items: flex-start;">
          <p class="marketing-text" style="font-family: DidactGothic; font-size: 20px; margin: 0; width: 351px;">{{
            marketingText }}
          </p>
          <q-btn class="marketing-btn" label="Abra uma oportunidade"
            style="width: 252px; height: 46px; font-size: 20px; text-transform: none; border-radius: 200px; margin-top: 63px; border: 0.5px solid #B20CFF; background: rgba(178, 12, 255, 0.10);"></q-btn>
        </div>
        <div class="marketing-right" style="width: 45%; display: flex; justify-content: flex-end;">
          <p class="marketing-quote"
            style="font-family: DidactGothic; font-size: 20px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; width: 236px;">
            {{ secondMktText }}
          </p>
        </div>
      </div>
      <div class="text-image-container"
        style="border-radius: 15px; width: 1045px; height: 62px; z-index: 2; margin: 236px auto 0px; position: relative; align-items: flex-end; display: flex; justify-content: center; background: linear-gradient(90deg, #AE00FF47 0%, #65009347 21.15%, #B617FF47 58.17%, #69009947 89.42%)">
        <p class="text-image"
          style="color: #FFF; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: Inter; font-size: 25px; font-style: normal; font-weight: 600; line-height: normal;">
          {{ textImage }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.marketing-text,
.marketing-quote,
.marketing-btn {
  color: $primary;
}
</style>