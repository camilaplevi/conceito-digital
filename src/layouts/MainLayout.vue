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
const direitosText = ref('Todos os direitos reservados por Conceito Digital')

</script>

<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated class="bg-black text-white" style="justify-content: center; display: flex;">
      <q-toolbar class="q-px-md bg-black" style="height: 100px; justify-content: space-between; max-width: 1050px;">
        <img :src="imagesConceito.logoConceito" alt="" style="width: 160px;" class="q-mr-md gt-sm">
        <img :src="imagesConceito.logoConceito" alt="" style="width: 120px;" class="q-mr-md lt-sm">

        <div class="desktop-menu row items-center gt-sm">
          <ul class="menu-list"
            style="list-style: none; padding: 0; margin: 0; display: flex; align-items: center; gap: 20px;">
            <li v-for="item in menuItems" :key="item.id" style="margin-right: 20px; position: relative;">
              <router-link :to="item.path" :class="{ 'active-route': route.path === `/${item.path}` }"
                style="text-decoration: none; color: #fff; font-family: Inter; font-size: 17.161px; font-weight: 400; line-height: normal; padding: 5px 0; position: relative; transition: all 0.3s ease;">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleRightDrawer"
          style="position: absolute; right: 15px;" class="lt-md hamburger-menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" overlay elevated>
      <q-list class="mobile-drawer-content">
        <q-item v-for="(item, index) in menuItems" :key="item.id" clickable v-ripple :to="item.path"
          :class="{ 'active-mobile': route.path === `/${item.path}` }" :style="index === 0 ? 'margin-top: 130px;' : ''"
          class="mobile-menu-item">
          <q-item-section class="text-white">{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="background-color: black;">
      <div class="row justify-around items-center q-py-lg"
        style="max-width: 1250px; align-items: center; margin: auto;">
        <div class="col-auto">
          <img :src="imagesConceito.logoFooter" alt="Logo Conceito Digital" style="width: 117px; height: auto; " />
        </div>

        <div class="desktop-menu row items-center gt-sm">
          <ul class="menu-list-footer"
            style="list-style: none; padding: 0; margin: 0; display: flex; align-items: center; flex-direction: column;">
            <li v-for="item in menuItems" :key="item.id" style="margin-right: 20px; position: relative;">
              <router-link :to="item.path" :class="{ 'active-route': route.path === `/${item.path}` }"
                style="text-decoration: none; font-family: Inter; font-size: 17.161px; font-weight: 400; line-height: normal; padding: 10px 20px; position: relative; transition: all 0.3s ease;">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="termo-policy">
          <p class="footer-text">{{ termosText }}</p>
          <p class="footer-text">{{ privacyPolicy }}</p>
        </div>

        <div class="social-grid" style="display: grid; 
            grid-template-columns: repeat(5, 1fr); 
            grid-template-rows: auto auto; 
            gap: 10px 5px;  
            justify-items: center; 
            align-items: center; 
            width: 100%; 
            max-width: 250px;">

          <img :src="imagesConceito.instagramLogo" alt="Instagram" style="width: 40px; grid-column: 3; grid-row: 1;">
          <img :src="imagesConceito.whatsappLogo" alt="WhatsApp" style="width: 40px; grid-column: 4; grid-row: 1;">
          <img :src="imagesConceito.linkedinLogo" alt="LinkedIn" style="width: 40px; grid-column: 5; grid-row: 1;">

          <img :src="imagesConceito.behanceLogo" alt="Behance"
            style="width: 40px; grid-column: 4; grid-row: 2; margin-left: -45px;">
          <img :src="imagesConceito.youtubeLogo" alt="YouTube"
            style="width: 40px; grid-column: 5; grid-row: 2; margin-left: -38px;">
        </div>
      </div>
      <hr style="width: 85%; 
          border: none;
          border-top: 1px solid var(--q-secondary);
          margin: 20px auto;">
      <div class="direitos-area" style="text-align: center; color: var(--q-middleGrey);">
        <p class="footer-text">{{ direitosText }}</p>
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

.footer-text {
  color: $middle-grey;
}

.q-drawer {
  width: 100% !important;
  max-width: 100% !important;

  &__backdrop {
    background: rgba(0, 0, 0, 0.85) !important;
  }

  &__content {
    background: transparent !important;
    box-shadow: none !important;
    width: 100% !important;
  }
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2000;
}

.mobile-drawer-content {
  height: 100%;
  background: black;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
}


.mobile-menu-item {
  font-family: Inter;
  font-size: 17.161px;
  color: white;
  margin-bottom: 10px;
  border-radius: 22.771px;
  width: 178px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active-mobile {
    border: 1.518px solid rgba(0, 194, 255, 0.30);
    background: #B20CFF;
    color: black !important;

    .q-item__section {
      color: black !important;
      font-weight: bold;
    }
  }

  &:hover {
    color: black;
    background: #B20CFF;
  }
}

.menu-list {
  li {
    height: 31px;
    display: flex;
    align-items: center;

    a {
      padding: 5px 0;
      min-width: 115px;
      text-align: center;
      display: inline-flex;
      justify-content: center;
      transition: background-color 0.3s ease;
    }

    a.active-route {
      border-radius: 22.771px;
      border: 1.518px solid rgba(0, 194, 255, 0.30);
      background: #B20CFF;
      color: black !important;
      font-weight: 600;
      height: 31px;
      padding: 5px 20px;
    }

    a:hover:not(.active-route) {
      background: rgba(72, 188, 255, 0.5);
      border-radius: 22.771px;
      height: 31px;
      padding: 5px 20px;
      font-weight: 600;
    }
  }
}

@media (max-width: 790px) {
  .logo-mobile {
    width: 140px !important;
    margin: 15px auto !important;
  }
}

@media (max-width: 1024px) {
  .desktop-menu {
    margin-right: 100px !important;
  }

  .menu-link {
    font-size: 15px !important;
  }

  .hamburger-menu {
    position: absolute !important;
    right: 15px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 2000;
  }

  .q-toolbar {
    padding-right: 60px !important;
  }
}
</style>