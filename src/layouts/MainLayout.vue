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

</script>

<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated class="bg-black text-white">
      <q-toolbar class="q-px-md bg-black" style="height: 100px; justify-content: space-between">
        <img :src="imagesConceito.logoConceito" alt="" style="width: 160px; margin-left: 200px;">
        <div class="desktop-menu row items-center" style="margin-right: 200px">
          <ul class="menu-list"
            style="list-style: none; padding: 0; margin: 0; display: flex; align-items: center; gap: 40px;">
            <li v-for="item in menuItems" :key="item.id" class="menu-item"
              style="margin-right: 20px; position: relative;">
              <router-link :to="item.path" :class="{ 'active-route': route.path === item.path }" class="menu-link"
                style="text-decoration: none; color: #fff; font-family: Inter; font-size: 17.161px; font-weight: 400; line-height: normal; padding: 5px 0; position: relative; transition: all 0.3s ease;">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <q-btn flat dense round icon="menu" aria-label="Menu" class="hamburger-menu" @click="toggleRightDrawer"
          style="display: none; margin-right: 15px" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" bordered side="right" behavior="mobile" class="bg-white">
      <img :src="imagesConceito.logoConceito" alt="Logo FireBeauty" class="logo-mobile" />
      <hr style="width: 90%" />
      <q-list>
        <q-item v-for="item in menuItems" :key="item.id" clickable v-ripple :to="item.path"
          :class="{ active: route.path === item.path }" class="mobile-menu-item">
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="scss">
@media (max-width: 790px) {
  .desktop-menu {
    display: none !important;
  }

  .hamburger-menu {
    display: block !important;
  }
}
</style>