<template>
  <q-layout view="hHh lpR fFf">
    <div class="loader-wrapper">
      <q-linear-progress indeterminate color="accent" v-if="loading" />
    </div>

    <q-drawer v-model="left" side="left" overlay elevated>
      Menu
    </q-drawer>
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="mdi-menu" @click="left = !left" />

        <q-toolbar-title>
          Title
        </q-toolbar-title>
        <div class="q-gutter-x-md">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          <span>{{ user.email }}</span>
          <q-btn flat round icon="mdi-logout-variant" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <button @click="test()">TEST</button>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" src="./home.ts"></script>
<style scoped src="./home.scss" lang="scss"></style>
