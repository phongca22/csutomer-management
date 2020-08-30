<template>
  <div>
    <h1>Home</h1>
    <div>{{ user.email }}</div>
    <button @click="go()">Admin</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/store/auth/user';
import AuthService from '@/store/auth/service';

@Component({
  components: {}
})
export default class Home extends Vue {
  user!: User;

  constructor() {
    super();
    this.user = AuthService.getUser();
  }

  go() {
    this.$router.push('/admin');
  }
}
</script>
