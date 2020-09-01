<template>
  <q-page class="fit column content-center justify-center">
    <div class="q-pa-md" style="width: 400px">
      <div class="q-gutter-y-md">
        <div class="q-gutter-y-md">
          <q-input
            filled
            ref="user"
            v-model="user"
            label="Enter your email"
            :rules="[val => !!val || 'Email is required']"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account" />
            </template>
          </q-input>
          <q-input
            filled
            ref="pass"
            v-model="pass"
            label="Enter your password"
            :rules="[val => !!val || 'Password is required']"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
          </q-input>
        </div>
        <div class="row justify-center">
          <q-btn @click="login()" label="Sign In" type="submit" color="primary" />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts" src="./login.ts"></script>
