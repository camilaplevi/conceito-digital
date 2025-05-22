<script setup lang="ts">
import { ref } from 'vue';
import { imagesConceito } from 'src/assets/images/Images'
import { useRoute } from 'vue-router';

const route = useRoute();
const rightDrawerOpen = ref(false);

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const menuItems = [
  { id: 1, path: 'inicio', label: 'Início' },
  { id: 2, path: 'sobre', label: 'Sobre' },
  { id: 3, path: 'portfolio', label: 'Portfólio' },
  { id: 4, path: 'contato', label: 'Contato' }
]

const termosText = ref('Termos e Condições')
const privacyPolicy = ref('Política de Privacidade')

</script>

<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated class="bg-black text-white" style="justify-content: center; display: flex;">
      <q-toolbar class="q-px-md bg-black" style="height: 100px; justify-content: space-between; max-width: 1050px;">
        <img :src="imagesConceito.logoConceito" alt="" style="width: 160px;" class=" q-mr-md gt-sm">

        <div class="desktop-menu row items-center gt-sm">
          <ul class="menu-list"
            style="list-style: none; padding: 0; margin: 0; display: flex; align-items: center; gap: 40px;">
            <li v-for="item in menuItems" :key="item.id" style="margin-right: 20px; position: relative;">
              <router-link :to="item.path" :class="{ 'active-route': route.path === item.path }"
                style="text-decoration: none; color: #fff; font-family: Inter; font-size: 17.161px; font-weight: 400; line-height: normal; padding: 5px 0; position: relative; transition: all 0.3s ease;">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleRightDrawer" style="margin-right: 15px"
          class="lt-md hamburger-menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" bordered side="right" behavior="mobile" class="bg-black">
      <img :src="imagesConceito.logoConceito" alt="Logo Conceito Digital"
        style="width: 160px; margin: 20px auto; display: block;" />
      <hr style="width: 90%; margin: 0 auto;" />
      <q-list>
        <q-item v-for="item in menuItems" :key="item.id" clickable v-ripple :to="item.path"
          :class="{ active: route.path === item.path }" style="font-family: Inter; font-size: 17.161px;">
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="background-color: black;">
      <div class="row justify-around items-center q-py-lg">
        <div class="col-auto">
          <img :src="imagesConceito.logoFooter" alt="Logo Conceito Digital" style="width: 117px; height: auto; " />
        </div>

        <div class="desktop-menu row items-center gt-sm">
          <ul class="menu-list"
            style="list-style: none; padding: 0; margin: 0; display: flex; align-items: center; flex-direction: column;">
            <li v-for="item in menuItems" :key="item.id" style="margin-right: 20px; position: relative;">
              <router-link :to="item.path" :class="{ 'active-route': route.path === item.path }"
                style="text-decoration: none; color: #fff; font-family: Inter; font-size: 17.161px; font-weight: 400; line-height: normal; padding: 5px 0; position: relative; transition: all 0.3s ease;">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="termo-policy">
          <p>{{ termosText }}</p>
          <p>{{ privacyPolicy }}</p>
        </div>

        <div class="images-footer"
          style="display: grid; grid-template-columns: repeat(3, 60px); grid-template-rows: auto auto; gap: 10px; justify-content: center; align-items: center; margin-top: 20px;">
          <img :src="imagesConceito.instagramLogo" alt="">
          <img :src="imagesConceito.whatsappLogo" alt="">
          <img :src="imagesConceito.linkedinLogo" alt="">
          <img :src="imagesConceito.behanceLogo" alt="">
          <img :src="imagesConceito.youtubeLogo" alt="">
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
.images-footer img:nth-child(4) {
  grid-column: 2;
  grid-row: 2;
}

.images-footer img:nth-child(5) {
  grid-column: 3;
  grid-row: 2;
}

@media (max-width: 790px) {
  .logo-mobile {
    width: 140px !important;
    margin: 15px auto !important;
  }

  .mobile-menu-item {
    padding: 12px 16px !important;
    font-size: 16px !important;
  }
}

@media (max-width: 1024px) {
  .desktop-menu {
    margin-right: 100px !important;
  }

  .menu-link {
    font-size: 15px !important;
  }
}
</style>