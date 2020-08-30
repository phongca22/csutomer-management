<template>
  <q-page class="flex flex-center">
    <button @click="login()">Login</button>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthService from '@/store/auth/service';

@Component({
  components: {}
})
export default class LoginComponent extends Vue {
  login() {
    AuthService.login({ user: 'abc', pass: 'xxx' }).subscribe((data: any) => {
      this.$router.push('/home');
    });
  }
}
</script>
